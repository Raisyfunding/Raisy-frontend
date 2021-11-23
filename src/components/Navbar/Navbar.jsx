import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Image,
  Divider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "../../images/logot.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("var(--white)", "var(--black)")}
        color={useColorModeValue("var(--black)", "var(--white)")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("var(--white)", "var(--black)")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Image src={logo} height={{ base: "45px", lg: "50px" }} />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            marginTop={"auto"}
            marginBottom={"auto"}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={{ base: 2, md: 4 }}
        >
          <Button
            onClick={toggleColorMode}
            bg={useColorModeValue("var(--white)", "var(--black)")}
            color={useColorModeValue("var(--black)", "var(--white)")}
            _focus={{ outline: "none !important" }}
            _hover={{
              bg: useColorModeValue("var(--black)", "var(--white)"),
              color: useColorModeValue("var(--white)", "var(--black)"),
            }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button
            as={"a"}
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={600}
            variant={"link"}
            border={"solid var(--blue) 2px"}
            color={useColorModeValue("var(--black)", "var(--white)")}
            href={"#"}
            padding={{ base: "5px", md: "10px" }}
            _focus={{ outline: "none !important" }}
            _hover={{
              bg: useColorModeValue("var(--black)", "var(--white)"),
              color: useColorModeValue("var(--white)", "var(--black)"),
            }}
          >
            Start a campaign
          </Button>
          <Button
            as={"a"}
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={600}
            variant={"link"}
            color={useColorModeValue("var(--black)", "var(--white)")}
            href={"#"}
            padding={{ base: "5px", md: "10px" }}
            _focus={{ outline: "none !important" }}
            _hover={{
              bg: useColorModeValue("var(--black)", "var(--white)"),
              color: useColorModeValue("var(--white)", "var(--black)"),
            }}
          >
            Login
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("var(--black)", "var(--white)");
  const linkHoverColor = useColorModeValue("var(--white)", "var(--black)");
  const linkHoverBg = useColorModeValue("var(--black)", "var(--white)");
  const popoverContentBgColor = useColorModeValue(
    "var(--white)",
    "var(--black)"
  );

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <>
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"lg"}
                  borderRadius="5px"
                  fontWeight={600}
                  color={linkColor}
                  _focus={{ outline: "none !important" }}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                    bg: linkHoverBg,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
          {index === 1 ? (
            <Divider orientation="vertical" borderColor={linkColor} />
          ) : null}
        </>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("var(--red)", "var(--black)") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "var(--red)" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"var(--red)"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("var(--white)", "var(--black)")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("var(--black)", "var(--white)")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("var(--black)", "var(--black)")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Explore",
    href: "explore",
  },
  {
    label: "How it Works",
    href: "help",
  },
  {
    label: "Search",
    href: "#",
  },
];

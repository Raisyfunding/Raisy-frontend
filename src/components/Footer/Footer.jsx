import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { FaTwitter, FaDiscord, FaYoutube, FaMedium } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import logo from '../../images/logot.png'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('var(--white)', 'var(--black)')}
      color={useColorModeValue('var(--black)', 'var(--white)')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('var(--black)', 'var(--white)'),
        color: useColorModeValue('var(--white)', 'var(--black)'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('var(--white)', 'var(--black)')}
      color={useColorModeValue('var(--black)', 'var(--white)')}
      justifyContent={'center'}
      position={'absolute'}
      bottom={'0'}
      width={'100vw'}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6} margin="auto">
            <Box>
              <Image src={logo} width={{ base: '80px', lg: '100px' }} />
            </Box>
            <Text fontSize={'sm'}>© 2020 BG Labs. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Discord'} href={'#'}>
                <FaDiscord />
              </SocialButton>
              <SocialButton label={'Medium'} href={'#'}>
                <FaMedium />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Protocol</ListHeader>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              About us
            </Link>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Blog
            </Link>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Contact us
            </Link>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Pricing
            </Link>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Whitepaper
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Help Center
            </Link>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Terms of Service
            </Link>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Legal
            </Link>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Privacy Policy
            </Link>
            <Link href={'#'} _focus={{ outline: 'none !important' }}>
              Satus
            </Link>
          </Stack>
          <Stack align={'flex-start'} margin="auto" marginLeft="0">
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                border="solid 1px"
                borderColor={useColorModeValue('var(--black)', 'var(--white)')}
                _focus={{
                  border: 'solid 2px',
                  borderColor: useColorModeValue(
                    'var(--black)',
                    'var(--white)'
                  ),
                }}
              />
              <IconButton
                _focus={{ outline: 'none !important' }}
                bg={useColorModeValue('var(--white)', 'var(--black)')}
                color={useColorModeValue('var(--black)', 'var(--white)')}
                _hover={{
                  bg: useColorModeValue('var(--black)', 'var(--white)'),
                  color: useColorModeValue('var(--white)', 'var(--black)'),
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

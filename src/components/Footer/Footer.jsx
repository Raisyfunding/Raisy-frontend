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
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { FaTwitter, FaTelegram, FaYoutube, FaMedium } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import logo from '../../images/logot.png';
import { Skeleton } from '@chakra-ui/react';

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
        opacity: '0.4',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('var(--white)', 'var(--black)')}
      color={useColorModeValue('var(--black)', 'var(--white)')}
      justifyContent={'center'}
      position={{ base: 'unset', lg: 'absolute' }}
      bottom={'50px'}
      width={'100vw'}
    >
      <Container as={Stack} maxWidth={'none'} py={10} flexDirection={'row'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 2fr' }}
          spacing={{ base: 8, md: 15, lg: 20 }}
          margin="auto"
        >
          <Stack
            spacing={6}
            margin="auto"
            display={{ base: 'none', md: 'flex' }}
          >
            <Box>
              <Image src={logo} width={{ base: '80px', lg: '100px' }} />
            </Box>
            <Text fontSize={'sm'}>© 2020 BG Labs. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Twitter'}
                href={'https://twitter.com/Raisyfunding'}
                target="_blank"
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'YouTube'}
                href={
                  'https://www.youtube.com/channel/UCZECAvPYyqVova82dKksfaA'
                }
                target="_blank"
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={'Telegram'}
                href={'https://t.me/raisygroup'}
                target="_blank"
              >
                <FaTelegram />
              </SocialButton>
              <SocialButton
                label={'Medium'}
                href={'https://raisy.medium.com/'}
                target={'_blank'}
              >
                <FaMedium />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Protocol</ListHeader>
            <Link
              href={'https://raisy.medium.com/'}
              _focus={{ outline: 'none !important' }}
            >
              Blog
            </Link>
            <Link
              href={'https://t.me/BGLabs'}
              _focus={{ outline: 'none !important' }}
            >
              Contact us
            </Link>
            <Link
              href={'https://github.com/Raisyfunding/whitepaper'}
              _focus={{ outline: 'none !important' }}
            >
              Whitepaper
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Get Started</ListHeader>
            <Link
              href={
                'https://raisy-funding.gitbook.io/raisy-doc/guides/creating-your-first-campaign'
              }
              _focus={{ outline: 'none !important' }}
            >
              Create a Campaign
            </Link>
            <Link
              href={
                'https://raisy-funding.gitbook.io/raisy-doc/guides/sending-your-first-donation'
              }
              _focus={{ outline: 'none !important' }}
            >
              Make a Donation
            </Link>
            <Link
              href={
                'https://raisy-funding.gitbook.io/raisy-doc/guides/claim-your-proof-of-donation'
              }
              _focus={{ outline: 'none !important' }}
            >
              Claim your POD
            </Link>
          </Stack>
          <Stack align={'flex-start'} gridGap={'5px'}>
            <ListHeader>Support</ListHeader>
            {/* <Link href={'#'} _focus={{ outline: 'none !important' }}>
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
            </Link> */}
            <Skeleton height="12px" width={'100px'} />
            <Skeleton height="12px" width={'100px'} />
            <Skeleton height="12px" width={'100px'} />
            <Skeleton height="12px" width={'100px'} />
          </Stack>
          <Stack margin="auto" marginLeft="0">
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
                  opacity: '0.4',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
          <Stack spacing={6} display={{ base: 'flex', md: 'none' }}>
            <Box>
              <Image src={logo} width={{ base: '80px', lg: '100px' }} />
            </Box>
          </Stack>
          <Stack
            direction={'column'}
            spacing={6}
            display={{ base: 'flex', md: 'none' }}
            margin={'auto'}
          >
            {' '}
            <Text fontSize={'sm'}>© 2020 BG Labs. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Twitter'}
                href={'https://twitter.com/Raisyfunding'}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'YouTube'}
                href={
                  'https://www.youtube.com/channel/UCZECAvPYyqVova82dKksfaA'
                }
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Telegram'} href={'https://t.me/raisygroup'}>
                <FaTelegram />
              </SocialButton>
              <SocialButton
                label={'Medium'}
                href={'https://raisy.medium.com/'}
                target="_blank"
              >
                <FaMedium />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

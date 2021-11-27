import { Button, useColorModeValue } from '@chakra-ui/react';
import { Flex, Text, Box } from '@chakra-ui/layout';

import React from 'react';

function Landing() {
  return (
    <Box
      height="100vh"
      display={'flex'}
      backgroundImage={useColorModeValue(
        '/images/dotwhite.png',
        '/images/dotblack.png'
      )}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
    >
      <Flex flexDirection={'column'} verticalAlign={'center'} margin={'auto'}>
        <Text
          fontSize={{ base: '6xl', sm: '7xl', md: '7xl', lg: '7xl', xl: '8xl' }}
          style={{
            textAlign: 'center',
            background:
              '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
          }}
          fontWeight={'900'}
          margin={'auto'}
          width={'95vw'}
        >
          WE CONNECT PEOPLE
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}
          style={{ textAlign: 'center' }}
          fontWeight={'400'}
          paddingTop={'50px'}
          paddingBottom={'30px'}
          margin={'auto'}
          width={'95vw'}
        >
          Raisy is the first decentralized crowdfunding platform <br />
          Raise and donate funds with no registration.
        </Text>
        <Button
          width={'200px'}
          margin={'auto'}
          color={'black'}
          background={
            'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))'
          }
          _hover={{
            opacity: 0.8,
            background:
              'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
          }}
        >
          Get Started
        </Button>
      </Flex>
    </Box>
  );
}

export default Landing;

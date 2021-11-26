import { Image } from '@chakra-ui/image'
import { Button, useColorModeValue } from '@chakra-ui/react'
import { Flex, Text, Box } from '@chakra-ui/layout'

import React from 'react'

function Landing() {
  return (
    <Box
      height="100vh"
      backgroundImage={useColorModeValue(
        '/images/dotwhite.png',
        '/images/dotblack.png'
      )}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
    >
      {' '}
      <Flex
        width={'100vw'}
        flexDirection={'column'}
        verticalAlign={'center'}
        position={'absolute'}
        top={'20%'}
      >
        <Text
          fontSize={{ base: '4xl', md: '5xl', lg: '8xl' }}
          style={{
            textAlign: 'center',
            background:
              '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
          }}
          fontWeight={'900'}
        >
          WE CONNECT PEOPLE
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}
          style={{ textAlign: 'center' }}
          fontWeight={'400'}
          paddingTop={'50px'}
          paddingBottom={'30px'}
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
  )
}

export default Landing

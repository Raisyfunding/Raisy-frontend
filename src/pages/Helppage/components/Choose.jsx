import { Flex, Text, Box, Center, Link } from '@chakra-ui/layout';
import { SpacerLarge } from '../../../styles/globalStyles';
import React from 'react';

function Choose() {
  return (
    <Flex direction="column" alignSelf="center" height="100%">
      <Text
        fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        style={{ textAlign: 'center' }}
      >
        Are you a <span style={{ color: 'var(--blue)' }}>Creator</span> or a{' '}
        <span style={{ color: 'var(--blue)' }}>Donor</span> ?
      </Text>
      <SpacerLarge />
      <SpacerLarge />

      <Center>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gridGap="60px"
          width="100vw"
          height="100%"
          margin="auto"
          textAlign="center"
          alignItems="center"
          justifyContent={'center'}
        >
          <Link href="/creator" style={{ textDecoration: 'none' }}>
            <Box bg="#C4C4C4" width="500px" height="400px" borderRadius="3xl">
              <Box>
                <Text
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  style={{ textAlign: 'center' }}
                >
                  Creat
                </Text>
                <Text
                  fontSize={{ base: '1xl' }}
                  style={{ textAlign: 'center' }}
                >
                  The person or team behind the project idea, working to bring
                  it to life.
                </Text>
              </Box>
            </Box>
          </Link>

          <Link href="/donor" style={{ textDecoration: 'none' }}>
            <Box bg="#C4C4C4" width="500px" height="400px" borderRadius="3xl">
              <Box>
                <Text
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  style={{ textAlign: 'center' }}
                >
                  Donor
                </Text>
                <Text
                  fontSize={{ base: '1xl' }}
                  width="300px"
                  textAlign="center"
                >
                  The person or folks who pledge money to join creators in
                  bringing projects to life
                </Text>
              </Box>
            </Box>
          </Link>
        </Flex>
      </Center>
    </Flex>
  );
}

export default Choose;

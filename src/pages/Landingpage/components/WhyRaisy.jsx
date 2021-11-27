import { HStack, VStack } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import React from 'react';
import PODwhite from '../../../images/POD_white.png';
import PODblack from '../../../images/POD_black.png';
import communitywhite from '../../../images/community_white.png';
import communityblack from '../../../images/community_black.png';
import decentralizedwhite from '../../../images/decentralized_white.png';
import decentralizedblack from '../../../images/decentralized_black.png';

function WhyRaisy() {
  return (
    <Box
      height="100vh"
      width={'100vw'}
      backgroundImage={'/images/wavebg.png'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
    >
      <Text
        fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        style={{
          textAlign: 'center',
          background:
            '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
          webkitBackgroundClip: 'text',
          webkitTextFillColor: 'transparent',
        }}
        fontWeight={'900'}
      >
        WHY SHOULD I USE RAISY?
      </Text>
      <Text
        fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }}
        style={{ textAlign: 'center' }}
        fontWeight={'400'}
        paddingTop={'30px'}
        paddingBottom={'30px'}
      >
        Join the Raisy experience. Raise funds, help people around the world
        without registration. <br /> Any idea or need can be funded, join us
        now.
      </Text>
      <Flex
        flexDirection={'row'}
        width={'100vw'}
        gridGap={'50px'}
        padding={'50px'}
        justifyContent={'center'}
      >
        <Flex
          width={'320px'}
          height={'330px'}
          _hover={{ opacity: '0.8' }}
          backgroundColor={useColorModeValue(
            'rgba(255,255,255,1)',
            'rgba(21,21,21,.64)'
          )}
          borderRadius={'50px'}
          border={'1px solid'}
          borderColor={useColorModeValue(
            'rgba(235, 235, 235, 1)',
            'rgba(25,25,25,1)'
          )}
          padding={'30px'}
          flexDirection={'column'}
        >
          <Flex
            backgroundColor={useColorModeValue(
              'rgba(250,250,250,1)',
              'rgba(25,25,25,1)'
            )}
            width={'80px'}
            height={'80px'}
            borderRadius={'full'}
          >
            <Image
              src={useColorModeValue(decentralizedblack, decentralizedwhite)}
              width={'50px'}
              height={'50px'}
              margin={'auto'}
            />
          </Flex>
          <Text fontSize={'2xl'} fontWeight={'800'} marginTop={'auto'}>
            Community <br />
            Driven
          </Text>
        </Flex>
        <Flex
          width={'320px'}
          _hover={{ opacity: '0.8' }}
          height={'330px'}
          backgroundColor={useColorModeValue(
            'rgba(255,255,255,1)',
            'rgba(21,21,21,.64)'
          )}
          borderRadius={'50px'}
          border={'1px solid'}
          borderColor={useColorModeValue(
            'rgba(235, 235, 235, 1)',
            'rgba(25,25,25,1)'
          )}
          padding={'30px'}
          flexDirection={'column'}
        >
          <Flex
            backgroundColor={useColorModeValue(
              'rgba(250,250,250,1)',
              'rgba(25,25,25,1)'
            )}
            width={'80px'}
            height={'80px'}
            borderRadius={'full'}
          >
            <Image
              src={useColorModeValue(PODblack, PODwhite)}
              width={'50px'}
              height={'50px'}
              margin={'auto'}
            />
          </Flex>
          <Text fontSize={'2xl'} fontWeight={'800'} marginTop={'auto'}>
            Proof of <br />
            Donation
          </Text>
        </Flex>
        <Flex
          width={'320px'}
          height={'330px'}
          _hover={{ opacity: '0.8' }}
          backgroundColor={useColorModeValue(
            'rgba(255,255,255,1)',
            'rgba(21,21,21,.64)'
          )}
          borderRadius={'50px'}
          border={'1px solid'}
          borderColor={useColorModeValue(
            'rgba(235, 235, 235, 1)',
            'rgba(25,25,25,1)'
          )}
          padding={'30px'}
          flexDirection={'column'}
        >
          <Flex
            backgroundColor={useColorModeValue(
              'rgba(250,250,250,1)',
              'rgba(25,25,25,1)'
            )}
            width={'80px'}
            height={'80px'}
            borderRadius={'full'}
          >
            <Image
              src={useColorModeValue(communityblack, communitywhite)}
              width={'50px'}
              height={'50px'}
              margin={'auto'}
            />
          </Flex>
          <Text fontSize={'2xl'} fontWeight={'800'} marginTop={'auto'}>
            Social <br />
            Staking
          </Text>
        </Flex>
      </Flex>

      {/* <VStack spacing="5em">
        <HStack spacing="8em">
          <Flex direction="column">
            <Image
              src={useColorModeValue(decentralizedblack, decentralizedwhite)}
              margin="auto"
              width="64px"
            />
            <SpacerXSmall />
            <Text
              fontSize="1xl"
              style={{ textAlign: 'center' }}
              fontWeight="bold"
            >
              Decentralized
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center">
            <Image
              src={useColorModeValue(togetherblack, togetherwhite)}
              width="64px"
            />
            <SpacerXSmall />
            <Text
              fontSize="1xl"
              style={{ textAlign: 'center' }}
              fontWeight="bold"
            >
              Community-driven
            </Text>
          </Flex>
          <Flex direction="column">
            <Image
              src={useColorModeValue(shieldblack, shieldwhite)}
              width="64px"
            />
            <SpacerXSmall />
            <Text
              fontSize="1xl"
              style={{ textAlign: 'center' }}
              fontWeight="bold"
            >
              Secured
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center">
            <Image
              src={useColorModeValue(rewardBlack, rewardWhite)}
              width="64px"
            />
            <SpacerXSmall />
            <Text
              fontSize="1xl"
              style={{ textAlign: 'center' }}
              fontWeight="bold"
            >
              Reward-based
            </Text>
          </Flex>
        </HStack>
        <HStack spacing="8em">
          <Flex direction="column">
            <Image
              src={useColorModeValue(searchblack, searchwhite)}
              margin="auto"
              width="160px"
              alignSelf="center"
            />
            <SpacerXSmall />
            <Text
              fontSize="2xl"
              style={{ textAlign: 'center' }}
              fontWeight="bold"
              marginTop="10px"
            >
              Ready? Explore !
            </Text>
          </Flex>
          <Box width="1px" height="150px" bg="var(--blue)"></Box>
          <Flex direction="column">
            <Image
              src={useColorModeValue(inspirationblack, inspirationwhite)}
              width="160px"
              alignSelf="center"
            />
            <SpacerXSmall />
            <Text
              fontSize="2xl"
              style={{ textAlign: 'center' }}
              fontWeight="bold"
              marginTop="10px"
            >
              inspired? Let's go !
            </Text>
          </Flex>
        </HStack>
      </VStack> */}
    </Box>
  );
}

export default WhyRaisy;

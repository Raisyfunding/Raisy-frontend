import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import decentralizedwhite from '../../../images/decentralized_white.png';
import decentralizedblack from '../../../images/decentralized_black.png';

const StakingStats = () => {
  const priceRaisy = 10;
  return (
    <div>
      <Box
        flexDirection={'column'}
        width={'100vw'}
        height={{ base: '', lg: '100vh' }}
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
          paddingBottom={'50px'}
          margin={'auto'}
          width={'95vw'}
        >
          RAISY STATS
        </Text>
        <Flex
          gridGap={'30px'}
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent={'center'}
          paddingLeft={{ base: '20px', md: '100px' }}
          paddingRight={{ base: '20px', md: '100px' }}
          paddingBottom={{ base: '50px', lg: 'unset' }}
        >
          <Flex
            gridGap={'30px'}
            flexDirection={'column'}
            width={'-webkit-fill-available'}
            margin={{ base: 'auto', lg: 'unset' }}
          >
            <Flex
              flexDirection={{ base: 'column', sm: 'row' }}
              gridGap={'30px'}
            >
              <Flex
                _hover={{ opacity: '0.8' }}
                width={'-webkit-fill-available'}
                height={'280px'}
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
                padding={'20px'}
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
                    src={useColorModeValue(
                      decentralizedblack,
                      decentralizedwhite
                    )}
                    width={'50px'}
                    height={'50px'}
                    margin={'auto'}
                  />
                </Flex>
                <Text
                  fontSize={'5xl'}
                  fontWeight={'900'}
                  margin={'auto'}
                  style={{
                    textAlign: 'center',
                    background:
                      '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                    webkitBackgroundClip: 'text',
                    webkitTextFillColor: 'transparent',
                  }}
                >
                  100 k
                </Text>
                <Text fontSize={'2xl'} fontWeight={'800'} marginTop={'auto'}>
                  campaigns <br />
                  funded
                </Text>
              </Flex>
              <Flex
                _hover={{ opacity: '0.8' }}
                height={'280px'}
                width={'-webkit-fill-available'}
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
                padding={'20px'}
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
                    src={useColorModeValue(
                      decentralizedblack,
                      decentralizedwhite
                    )}
                    width={'50px'}
                    height={'50px'}
                    margin={'auto'}
                  />
                </Flex>
                <Text
                  fontSize={{ base: '4xl', xl: '5xl' }}
                  fontWeight={'900'}
                  margin={'auto'}
                >
                  3 million
                </Text>
                <Text fontSize={'2xl'} fontWeight={'800'} marginTop={'auto'}>
                  $ <br />
                  of Donation
                </Text>
              </Flex>
            </Flex>
            <Flex
              _hover={{ opacity: '0.8' }}
              height={'200px'}
              style={{
                background:
                  'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              }}
              borderRadius={'50px'}
              border={'1px solid'}
              borderColor={useColorModeValue(
                'rgba(235, 235, 235, 1)',
                'rgba(25,25,25,1)'
              )}
              padding={'20px'}
              flexDirection={'row'}
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
                  src={useColorModeValue(
                    decentralizedblack,
                    decentralizedwhite
                  )}
                  width={'50px'}
                  height={'50px'}
                  margin={'auto'}
                />
              </Flex>
              <Text fontSize={'5xl'} fontWeight={'900'} margin={'auto'}>
                300k
              </Text>
              <Text
                fontSize={'2xl'}
                fontWeight={'800'}
                marginLeft={'auto'}
                marginTop={'auto'}
              >
                people <br />
                helped
              </Text>
            </Flex>
          </Flex>
          <Flex display={'flex'} justifyContent={'center'}>
            <Flex
              _hover={{ opacity: '0.8' }}
              width={{
                base: '-webkit-fill-available',
                lg: '300px',
                xl: '350px',
              }}
              height={{ base: '200px', lg: '-webkit-fill-available' }}
              backgroundColor={useColorModeValue(
                'rgba(255,255,255,1)',
                'rgba(21,21,21,.64)'
              )}
              borderRadius={'50px'}
              border={'1px solid'}
              style={{
                borderColor: 'rgba(78, 213, 186, 1)',
              }}
              padding={'20px'}
              flexDirection={{ base: 'row', lg: 'column' }}
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
                  src={useColorModeValue(
                    decentralizedblack,
                    decentralizedwhite
                  )}
                  width={'50px'}
                  height={'50px'}
                  margin={'auto'}
                />
              </Flex>
              <Text fontSize={'5xl'} fontWeight={'900'} margin={'auto'}>
                {priceRaisy} $
              </Text>
              <Text
                fontSize={'2xl'}
                fontWeight={'800'}
                marginTop={'auto'}
                marginLeft={{ base: 'auto', lg: 'unset' }}
              >
                Raisy <br />
                Price
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default StakingStats;

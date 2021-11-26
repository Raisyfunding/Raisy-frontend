import {
  Button,
  Flex,
  Image,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import decentralizedwhite from '../../../images/decentralized_white.png'
import decentralizedblack from '../../../images/decentralized_black.png'

const StakingStats = () => {
  return (
    <div>
      <Flex flexDirection={'column'} width={'100vw'} height={'100vh'}>
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
        >
          RAISY STATS
        </Text>
        <Flex
          gridGap={'30px'}
          flexDirection={'column'}
          maxWidth={'50vw'}
          maxHeight={'70vw'}
          paddingLeft={'30px'}
        >
          <Flex flexDirection={'row'} gridGap={'30px'}>
            <Flex
              width={'50%'}
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
              <Text fontSize={'5xl'} fontWeight={'900'} margin={'auto'}>
                100 k
              </Text>
              <Text fontSize={'2xl'} fontWeight={'800'} marginTop={'auto'}>
                campaigns <br />
                funded
              </Text>
            </Flex>
            <Flex
              width={'50%'}
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
              <Text fontSize={'5xl'} fontWeight={'900'} margin={'auto'}>
                3 billion
              </Text>
              <Text fontSize={'2xl'} fontWeight={'800'} marginTop={'auto'}>
                $ <br />
                of Donation
              </Text>
            </Flex>
          </Flex>
          <Flex
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
                src={useColorModeValue(decentralizedblack, decentralizedwhite)}
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
      </Flex>
    </div>
  )
}

export default StakingStats

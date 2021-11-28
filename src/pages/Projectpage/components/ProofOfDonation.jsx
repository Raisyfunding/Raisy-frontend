import { ethers } from 'ethers';
import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const ProofOfDonation = ({ pod }) => {
  const color = useColorModeValue('rgba(255,255,255,1)', 'rgba(21,21,21,.64)');

  return (
    <Flex
      margin={'auto'}
      width={'300px'}
      height={'auto'}
      _hover={{ opacity: '0.8' }}
      background={
        'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))'
      }
      borderRadius={'50px'}
      padding={'20px'}
      flexDirection={'column'}
    >
      <Text
        fontSize={'2xl'}
        fontWeight={'900'}
        style={{
          textAlign: 'center',
        }}
      >
        Campaign {parseInt(pod.campaignId._hex)}
      </Text>
      {/* <Text paddingTop={"15px"} textAlign={"justify"}>
                        {campaign.description}
                      </Text> */}
      <Text
        paddingTop={'15px'}
        fontSize={'1xl'}
        fontWeight={'900'}
        style={{
          textAlign: 'center',
        }}
      >
        Donated {ethers.utils.formatEther(pod.amount)} $
        {/* in{' '}
                            {
                              tokens.find(
                                (token) => pod.tokenUsed === token.address
                              ).symbol
                            } */}
      </Text>
      <Text
        paddingTop={'15px'}
        paddingBottom={'15px'}
        textAlign={'justify'}
        fontWeight={'700'}
      >
        Donated at{' '}
        {new Date(parseInt(pod.creationTimestamp._hex) * 1000).toString()}
      </Text>
    </Flex>
  );
};

export default ProofOfDonation;

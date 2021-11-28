import { ethers } from 'ethers'
import React from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const ProofOfDonation = ({pod}) => {

  const color = useColorModeValue('rgba(255,255,255,1)', 'rgba(21,21,21,.64)');

  return (
    <Flex
          margin={'auto'}
          width={'300px'}
          height={'auto'}
          backgroundColor={color}
          borderRadius={'50px'}
          border={'1px solid'}
          borderColor={color}
          padding={'20px'}
          flexDirection={'column'}
          _hover={{ opacity: '0.8' }}
        >
          <Text paddingTop={'15px'} textAlign={'justify'} fontSize="xl">
            Campaign {parseInt(pod.campaignId._hex)}
          </Text>
          {/* <Text paddingTop={"15px"} textAlign={"justify"}>
                        {campaign.description}
                      </Text> */}
          <Text paddingTop={'15px'} textAlign={'justify'}>
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
          >
            Donated at{' '}
            {new Date(
              parseInt(pod.creationTimestamp._hex) * 1000
            ).toString()}
          </Text>
        </Flex>
  )
}

export default ProofOfDonation

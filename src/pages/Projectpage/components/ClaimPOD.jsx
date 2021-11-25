import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'

const ClaimPOD = () => {
  return (
    <div>
      <Flex flexDirection={'column'} alignItems={'center'} margin={'20px'}>
        <Text textAlign={'center'} fontSize={'3xl'} color={'white'}>
          Claim your Proof of Donation
        </Text>
        <Text padding={'30px'} textAlign={'center'}>
          Congratulations! You helped this campaign raise funds! You have earned
          a proof of donation:
        </Text>
        <Button width={'80%'}>Claim Proof Of Donation</Button>
      </Flex>
    </div>
  )
}

export default ClaimPOD

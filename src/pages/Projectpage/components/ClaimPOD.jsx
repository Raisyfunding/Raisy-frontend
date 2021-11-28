import React, { useState } from 'react';
import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { formatError } from '../../../utils';
import { useCampaignsContract } from '../../../contracts';
import { useWeb3React } from '@web3-react/core';

const ClaimPOD = ({ campaignId }) => {
  const [claiming, setClaiming] = useState(false);
  const toast = useToast();
  const { claimProofOfDonation } = useCampaignsContract();
  const { account } = useWeb3React();

  const handleClaimPOD = async () => {
    if (claiming || campaignId === undefined) return;

    setClaiming(true);

    try {
      const tx = await claimProofOfDonation(campaignId, account);

      await tx.wait();

      toast({
        title: 'You have successfully claimed your Proof Of Donation 👀',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setClaiming(false);
    } catch (err) {
      toast({
        title: 'Error during funds claim on-chain',
        description: formatError(err),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(err);

      setClaiming(false);
    }
  };

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
        <Button width={'80%'} onClick={handleClaimPOD} disabled={claiming}>
          Claim Proof Of Donation
        </Button>
      </Flex>
    </div>
  );
};

export default ClaimPOD;

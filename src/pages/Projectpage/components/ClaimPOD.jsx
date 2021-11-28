import React, { useEffect, useState } from 'react';
import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { formatError } from '../../../utils';
import { useCampaignsContract, useNftContract } from '../../../contracts';
import { useWeb3React } from '@web3-react/core';
// import { useColorModeValue } from '@chakra-ui/react';
// import { ethers } from 'ethers';
import ProofOfDonation from './ProofOfDonation';
const ClaimPOD = ({ campaignId }) => {
  const [claiming, setClaiming] = useState(false);
  const [userPod, setUserPod] = useState(null);
  const toast = useToast();
  const { claimProofOfDonation } = useCampaignsContract();
  const { getProofsOfDonation } = useNftContract();
  const { account } = useWeb3React();

  // const color = useColorModeValue('rgba(255,255,255,1)', 'rgba(21,21,21,.64)');

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
      setClaiming(false);
    }
  };

  useEffect(() => {
    if (account && campaignId !== undefined) {
      getProofsOfDonation(account).then((_pods) => {
        const _pod = _pods.find(
          (_pod) => parseInt(_pod.campaignId._hex) === campaignId
        );
        if (_pod) {
          setUserPod(_pod);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, campaignId]);

  return (
    <>
      {!userPod ? (
        <Flex flexDirection={'column'} alignItems={'center'} margin={'20px'}>
          <Text
            fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
            style={{
              textAlign: 'center',
              background:
                '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            fontWeight={'900'}
            paddingBottom={'40px'}
            margin={'auto'}
          >
            Claim your Proof of Donation
          </Text>
          <Text padding={'30px'} textAlign={'center'}>
            Congratulations! You helped this campaign raise funds! You have
            earned a proof of donation:
          </Text>
          <Button
            width={'200px'}
            height={'60px'}
            margin={'auto'}
            borderRadius={'50px'}
            color={'black'}
            background={
              'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))'
            }
            _hover={{
              opacity: 0.8,
              background:
                'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
            }}
            onClick={handleClaimPOD}
            disabled={claiming}
          >
            Claim Proof Of Donation
          </Button>
        </Flex>
      ) : (
        <ProofOfDonation pod={userPod} />
      )}
    </>
  );
};

export default ClaimPOD;

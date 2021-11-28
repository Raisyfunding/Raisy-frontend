import React, { useState } from 'react';
import { Text, Box, Center, useToast, Button } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import Countdown from 'react-countdown';
import { formatError } from '../../../utils';
import { useCampaignsContract } from './../../../contracts';
import { Flex } from '@chakra-ui/react';
import VoteStats from './VoteStats';

const RefundSession = ({ currentProject, voteSession }) => {
  const { account } = useWeb3React();

  const [voting, setVoting] = useState(false);
  const toast = useToast();

  const { vote } = useCampaignsContract();

  const handleVote = async (_vote) => {
    if (voting) return;

    setVoting(true);

    try {
      const tx = await vote(currentProject.campaignId, _vote, account);

      await tx.wait();

      toast({
        title: 'Thank you for your vote 🔥',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setVoting(false);
    } catch (err) {
      toast({
        title: 'Error during vote on-chain',
        description: formatError(err),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
      setVoting(false);
    }
  };

  return (
    <div>
      <div>
        <Box>
          <Center>
            <Text fontSize="1xl" textAlign="center" width="80%">
              Donors can vote to cancel the fundrelease and get refund !
            </Text>
          </Center>
          <Box height="25px" />
          <Center>
            <Box width="60%">
              <VoteStats voteSession={voteSession} />
            </Box>{' '}
          </Center>
          <Box height="50px" />
          <Center>
            <Flex width="100%" gridGap={'20px'} justifyContent={'center'}>
              <Button
                width={'200px'}
                height={'60px'}
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
                onClick={() => handleVote(true)}
              >
                VOTE YES
              </Button>
            </Flex>
          </Center>
        </Box>
      </div>
    </div>
  );
};

export default RefundSession;

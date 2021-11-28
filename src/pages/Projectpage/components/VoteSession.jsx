import React, { useState } from 'react';
import { Text, Box, Center, useToast, Button } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import Countdown from 'react-countdown';
import { formatError } from '../../../utils';
import { useCampaignsContract } from './../../../contracts';
import { Flex } from '@chakra-ui/react';
import VoteStats from './VoteStats';

const VoteSession = ({ currentProject, voteSession }) => {
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
      setVoting(false);
    }
  };

  return (
    <div>
      {currentProject.nbMilestones ? (
        <div>
          {false ? (
            <div></div>
          ) : (
            <div>
              {console.log(voteSession)}
              <Box>
                <Box height="25px" />
                <Text fontSize="3xl" textAlign="center" fontWeight="bold">
                  {' '}
                  The vote session is live
                </Text>
                <Box height="25px" />
                <Center>
                  <Text fontSize="1xl" textAlign="center" width="80%">
                    {' '}
                    The campaign creator asked for a{' '}
                    <span style={{ fontWeight: 'bold' }}>20%</span> funds
                    release, if most of the users vote to interrupt it during
                    the meantime, the request will be canceled. 3 consecutives
                    failed request will give a refund of all donors.
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
                    <Button onClick={() => handleVote(true)}>VOTE YES</Button>
                    <Button onClick={() => handleVote(false)}>VOTE NO</Button>
                  </Flex>
                </Center>
                <Center>
                  <Text textAlign="center" width="50%" marginTop="10px">
                    Only donation proof owners of this campaign will be able to
                    vote
                  </Text>
                </Center>
                <Box height="20px" />
                <Center>
                  <Countdown date={Date.now() + 10000000} />
                </Center>

                <Box height="50px" />
              </Box>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VoteSession;

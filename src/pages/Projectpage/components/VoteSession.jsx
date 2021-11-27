import React, { useEffect, useState } from 'react';
import {
  Text,
  Box,
  Center,
  HStack,
  VStack,
  useToast,
  Button,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import Countdown from 'react-countdown';
import { toLower } from 'lodash';
import { formatError } from '../../../utils';
import { useCampaignsContract } from './../../../contracts';
import { Flex } from '@chakra-ui/react';

const VoteSession = ({ currentProject, fundingover }) => {
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
                  <HStack>
                    <Box>
                      <VStack>
                        <Text fontSize="3xl">256</Text>
                        <Text fontSize="2xl">Total Donors</Text>
                      </VStack>
                    </Box>
                    <Box width="50px" />
                    <Box>
                      <VStack>
                        <Text fontSize="3xl">12</Text>
                        <Text fontSize="2xl">Total votes</Text>
                      </VStack>
                    </Box>
                  </HStack>
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
                    vote against this funds release request
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

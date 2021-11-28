import React, { useState, useEffect } from 'react';
import { Text, Box, Center, useToast, Button } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import Countdown from 'react-countdown';
import { formatError } from '../../../utils';
import { useCampaignsContract } from './../../../contracts';
import { Flex, Spacer } from '@chakra-ui/react';
import VoteStats from './VoteStats';
import useBlockNumber from '../../../hooks/useBlockNumber';
import { AVERAGE_BLOCK_TIME } from '../../../constants/network';

const VoteSession = ({ currentProject, voteSession, schedule }) => {
  const { account } = useWeb3React();
  const VOTE_SESSION_DURATION = 40;
  const { getBlockNumber } = useBlockNumber();
  const [voting, setVoting] = useState(false);
  const toast = useToast();
  const [endBlock, setEndBlock] = useState(0);
  const [voteTimeEndDate, setVoteTimeEndDate] = useState(null);
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

  useEffect(() => {
    if (voteSession) {
      getBlockNumber().then((_blockNumber) => {
        const _endBlock = voteSession.startBlock + VOTE_SESSION_DURATION;
        const _isFinished = _blockNumber >= _endBlock;
        setEndBlock(_endBlock - _blockNumber);
        if (!_isFinished) {
          const _endDate = (_endBlock - _blockNumber) * 15 * 1000;

          setVoteTimeEndDate(_endDate);
        }
      });
    }
  }, [voteSession]);
  return (
    <div>
      {console.log(voteSession)}
      {currentProject.nbMilestones ? (
        <div>
          <Flex direction="column">
            {!voteSession?.inProgress ? (
              <div>
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
                  NO VOTE SESSION LIVE
                </Text>
              </div>
            ) : (
              <div>
                <Box>
                  <Box height="25px" />
                  <Text fontSize="3xl" textAlign="center" fontWeight="900">
                    {' '}
                    VOTE SESSION LIVE
                  </Text>
                  <Box height="25px" />
                  <Center>
                    <Text fontSize="1xl" textAlign="center" width="80%">
                      The campaign's creator asked for more funds. Vote if you
                      agree to release more funds for this project. Please note
                      that you need a Proof Of Donation to vote.
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
                    <Flex
                      width="100%"
                      gridGap={'20px'}
                      justifyContent={'center'}
                    >
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
                        onClick={() => handleVote(false)}
                      >
                        VOTE NO
                      </Button>
                    </Flex>
                  </Center>
                  {/* <Center>
                  <Text textAlign="center" width="50%" marginTop="10px">
                    Only donation proof owners of this campaign will be able to
                    vote
                  </Text>
                </Center> */}
                  <Box height="10px" />
                  {endBlock > 0 ? (
                    <Center>
                      <Text>The vote session ends in : </Text>
                      <Countdown date={Date.now() + voteTimeEndDate} />
                    </Center>
                  ) : (
                    <> </>
                  )}
                  <Box height="10px" />
                  <Center>
                    <Text>
                      {' '}
                      fundrelease request canceled :{' '}
                      {voteSession.numUnsuccessfulVotes}{' '}
                    </Text>
                  </Center>
                </Box>
              </div>
            )}
            <Box height="30px" />
            <Center>
              <Flex direction="row" alignItems="center" width="65%">
                <Text fontSize="3xl"> ask for a global refund</Text>
                <Spacer />
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
                  // onClick={() => handleVote(false)}
                >
                  Vote for global refund
                </Button>
              </Flex>
            </Center>
            <Box height="10px" />
            <Center>
              <Text>
                current vote for the global refund : {schedule.wantsRefund}
              </Text>
            </Center>
          </Flex>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VoteSession;

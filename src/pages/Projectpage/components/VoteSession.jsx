import React, { useState, useEffect } from 'react';
import { Text, Box, Center, useToast, Button, Flex } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { formatError } from '../../../utils';
import { useCampaignsContract } from './../../../contracts';
import VoteStats from './VoteStats';
import useBlockNumber from '../../../hooks/useBlockNumber';
import { useColorModeValue } from '@chakra-ui/react';

const VoteSession = ({ currentProject, voteSession, schedule }) => {
  const { account, chainId } = useWeb3React();
  const VOTE_SESSION_DURATION = 20;
  const { getBlockNumber } = useBlockNumber();
  const [voting, setVoting] = useState(false);
  const [votingRefund, setVotingRefund] = useState(false);
  const toast = useToast();
  const [endBlock, setEndBlock] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [voteTimeEndDate, setVoteTimeEndDate] = useState(null);
  const { vote, voteRefund } = useCampaignsContract();

  const currentBackground = useColorModeValue(
    'rgba(255,255,255,1)',
    'rgba(21,21,21,.64)'
  );
  const currentBorder = useColorModeValue(
    'rgba(235, 235, 235, 1)',
    'rgba(25,25,25,1)'
  );

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

  const handleVoteRefund = async () => {
    if (votingRefund) return;

    setVotingRefund(true);

    try {
      const tx = await voteRefund(currentProject.campaignId, account);

      await tx.wait();

      toast({
        title: 'Thank you for reporting this campaign 📢',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setVotingRefund(false);
    } catch (err) {
      toast({
        title: 'Error during refund vote on-chain',
        description: formatError(err),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setVotingRefund(false);
    }
  };

  const updateEndBlock = () => {
    if (!voteSession) return;

    getBlockNumber().then((_blockNumber) => {
      const _endBlock = voteSession.startBlock + VOTE_SESSION_DURATION;
      const _isFinished = _blockNumber >= _endBlock;
      setEndBlock(_endBlock - _blockNumber);
      if (!_isFinished) {
        const _endDate = (_endBlock - _blockNumber) * 15 * 1000;

        setVoteTimeEndDate(_endDate);
      }
    });
  };

  useEffect(() => {
    setInterval(() => {
      updateEndBlock();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voteSession, chainId]);
  return (
    <div>
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
                        disabled={endBlock < 0}
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
                        disabled={endBlock < 0}
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
                  <Text
                    fontSize={{
                      base: '2xl',
                      md: '2xl',
                      lg: '3xl',
                    }}
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
                    marginTop="20px"
                  >
                    {endBlock < 0
                      ? 'Vote session is over'
                      : `${endBlock} blocks remaining`}
                  </Text>
                </Box>
              </div>
            )}
            <Flex
              width={'-webkit-fill-available'}
              gridGap={'20px'}
              paddingTop={'20px'}
              flexDirection={'row'}
            >
              <Flex direction="row" alignItems="center" width="65%">
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
                  onClick={handleVoteRefund}
                  disabled={votingRefund}
                >
                  Vote for global refund
                </Button>
              </Flex>

              <Flex
                _hover={{ opacity: '0.8' }}
                width={'-webkit-fill-available'}
                backgroundColor={currentBackground}
                borderRadius={'50px'}
                border={'1px solid'}
                borderColor={currentBorder}
                padding={'20px'}
                flexDirection={'column'}
              >
                <Text
                  fontSize={{ base: '5xl', md: '4xl', lg: '5xl' }}
                  fontWeight={'900'}
                  style={{
                    textAlign: 'center',
                    background:
                      '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                    webkitBackgroundClip: 'text',
                    webkitTextFillColor: 'transparent',
                  }}
                >
                  {schedule.wantsRefund}
                  <br />
                </Text>{' '}
                <Text
                  fontSize={'1xl'}
                  fontWeight={'900'}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Refund Votes
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VoteSession;

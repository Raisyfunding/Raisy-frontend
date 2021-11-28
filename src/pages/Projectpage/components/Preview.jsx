import { Image } from '@chakra-ui/image';
import { Flex, Text, Box, Center, Spacer } from '@chakra-ui/layout';
import { Vstack, Button, Link, useToast } from '@chakra-ui/react';
import { SpacerLarge } from '../../../styles/globalStyles';
import Campaigninfo from './Campaigninfo';
import React, { Suspense, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles.module.scss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import SuspenseImg from '../../../components/suspense';
import security from '../../../images/security.png';
import moneybag from '../../../images/moneybag.png';
import handshake from '../../../images/handshake.png';
import { useWeb3React } from '@web3-react/core';
import { useCampaignsContract } from './../../../contracts/raisyCampaigns';
import { formatError } from '../../../utils';
import useBlockNumber from '../../../hooks/useBlockNumber';
import VoteStats from './VoteStats';

const renderMedia = (image, contentType) => {
  if (contentType === 'video' || image?.includes('youtube')) {
    return (
      <ReactPlayer
        className={styles.content}
        url={image}
        controls={true}
        width="100%"
        height="100%"
      />
    );
  } else if (contentType === 'embed') {
    return (
      <iframe title="cover-video" className={styles.content} src={image} />
    );
  } else if (contentType === 'image' || contentType === 'gif') {
    return (
      <Suspense
        fallback={
          <Loader
            type="Oval"
            color="#007BFF"
            height={32}
            width={32}
            className={styles.loader}
          />
        }
      >
        <SuspenseImg
          className={styles.content}
          src={`https://cloudflare-ipfs.com/ipfs/${image}`}
        />
      </Suspense>
    );
  }
};

function Preview({ currentProject, fundingover, schedule, voteSession }) {
  const { account } = useWeb3React();

  const { claimInitialFunds, claimNextFunds, askMoreFunds } =
    useCampaignsContract();
  const toast = useToast();
  const { getBlockNumber } = useBlockNumber();

  const [claiming, setClaiming] = useState(false);
  const [ending, setEnding] = useState(false);
  const [asking, setAsking] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const VOTE_SESSION_DURATION = 40;

  const handleClaimFunds = async () => {
    if (claiming) return;

    setClaiming(true);

    try {
      const tx = await claimInitialFunds(currentProject.campaignId, account);

      await tx.wait();

      toast({
        title: 'You have successfully claimed your funds 🤝',
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

  const handleEndVoteSession = async () => {
    if (ending) return;

    setEnding(true);

    try {
      const tx = await claimNextFunds(currentProject.campaignId, account);

      await tx.wait();

      toast({
        title: 'The vote session is now closed 💯',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setEnding(false);
    } catch (err) {
      toast({
        title: 'Error while ending vote session on-chain',
        description: formatError(err),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setEnding(false);
    }
  };

  const handleAskMoreFunds = async () => {
    if (asking) return;

    setAsking(true);

    try {
      const tx = await askMoreFunds(currentProject.campaignId, account);

      await tx.wait();

      toast({
        title: 'You have successfully requested more funds 💰',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setAsking(false);
    } catch (err) {
      toast({
        title: 'Error while asking more funds on-chain',
        description: formatError(err),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setAsking(false);
    }
  };

  useEffect(() => {
    if (voteSession.startBlock) {
      getBlockNumber().then((_blockNumber) => {
        const _isFinished =
          _blockNumber >= voteSession.startBlock + VOTE_SESSION_DURATION;
        setIsFinished(_isFinished);
        console.log(_blockNumber);
      });
    }
  }, [voteSession]);

  useEffect(() => {
    console.log(schedule);
  }, [schedule]);

  useEffect(() => {
    console.log(voteSession);
  }, [voteSession]);

  return (
    <Flex direction="column" height="100vh">
      {console.log(schedule)}
      <Box marginLeft="10%" marginRight="10%" marginTop="2%">
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Flex direction="column" width="700px">
            <Text fontWeight="bold" fontSize="80px" marginTop="-20px">
              {currentProject.title}
            </Text>
            {/* <Text textTransform="uppercase" textDecoration="underline" fontSize="13px" marginTop="-20px" marginLeft="5px">
                {currentProject.category}
              </Text> */}
            <SpacerLarge />
            <Box height="350px">
              {renderMedia(currentProject.coverImageHash, 'image')}
            </Box>
          </Flex>
          <Spacer />

          <Box width="400px">
            <Campaigninfo
              currentProject={currentProject}
              fundingover={fundingover}
              schedule={schedule}
            />
            <SpacerLarge />
            {fundingover && account ? (
              <div>
                {currentProject.creator === account.toLowerCase() ? (
                  <div>
                    {currentProject.amountToRaise -
                      currentProject.amountRaised <
                    0 ? (
                      <>
                        {schedule.currentMilestone > 0 ? (
                          <>
                            {' '}
                            {/* {voteSession.inProgress && !isFinished ? ( */}
                            {schedule.currentMilestone !==
                            currentProject.nbnbMilestones ? (
                              <>
                                {1 > 0 ? (
                                  <VoteStats voteSession={voteSession} />
                                ) : (
                                  <div>
                                    {voteSession.inProgress ? (
                                      <div>
                                        <Button
                                          width={'100%'}
                                          onClick={handleEndVoteSession}
                                          disabled={ending}
                                        >
                                          End Vote Session
                                        </Button>
                                      </div>
                                    ) : (
                                      <div>
                                        <Button
                                          width={'100%'}
                                          onClick={handleAskMoreFunds}
                                          disabled={asking}
                                        >
                                          Ask More Funds
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <Center>
                                  <Text>
                                    100% of the funds have been released !
                                  </Text>
                                </Center>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <Text
                              padding={'20px'}
                              marginLeft={'auto'}
                              marginRight={'auto'}
                            >
                              You can claim funds now ! Click on the button
                              below
                            </Text>
                            <Button
                              width={'100%'}
                              onClick={handleClaimFunds}
                              disabled={claiming}
                            >
                              Claim your funds
                            </Button>
                          </>
                        )}
                      </>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ) : (
                  <div>
                    {currentProject.amountToRaise -
                      currentProject.amountRaised <
                    0 ? (
                      <div></div>
                    ) : (
                      <Flex>
                        {/* display={account ? 'flex' : 'none'} */}
                        <Flex flexDirection={'column'} width={'100%'}>
                          <Text
                            padding={'20px'}
                            marginLeft={'auto'}
                            marginRight={'auto'}
                          >
                            The campaign is unsuccessful, or participants voted
                            in majority for a refund.
                          </Text>
                          <Button width={'100%'}>Withdraw your donation</Button>
                        </Flex>
                      </Flex>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Center>
                <div></div>
              </Center>
            )}
          </Box>
        </Flex>
      </Box>
      <Box
        width="100%"
        height="100px"
        position="fixed"
        top="100vh"
        marginTop="-167px"
        bg="#27292b"
      >
        <Flex
          direction="row"
          alignContent="center"
          textAlign="center"
          marginTop="15px"
        >
          <Spacer />
          <Box maxWidth="200px">
            <Text fontSize="16px" color="white">
              Raisy connects Creators with donors to fund their project
            </Text>
            <Center>
              <Image
                src={handshake}
                alt="project image"
                style={{ filter: 'grayscale(1)' }}
                opacity="0.2"
                marginTop="-45%"
              />
            </Center>
          </Box>
          <Spacer />
          <Box maxWidth="200px">
            <Text fontSize="16px" color="white">
              Releases partial fund after inspecting the progress of the project
            </Text>
            <Center>
              <Image
                src={moneybag}
                alt="project image"
                style={{ filter: 'grayscale(1)' }}
                opacity="0.2"
                marginTop="-40%"
                width="80px"
              />
            </Center>
          </Box>
          <Spacer />
          <Box maxWidth="200px">
            <Text fontSize="16px" color="white">
              Refunds the unreleased funds if project turns out to be a scam
            </Text>
            <Center>
              <Image
                src={security}
                alt="project image"
                style={{ filter: 'grayscale(1)' }}
                opacity="0.2"
                marginTop="-40%"
                width="80px"
              />
            </Center>
          </Box>

          <Spacer />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Preview;

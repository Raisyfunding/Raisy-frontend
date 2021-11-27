import { Image } from '@chakra-ui/image';
import { Flex, Text, Box, Center, Spacer } from '@chakra-ui/layout';
import {
  Vstack,
  Button,
  Link,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { SpacerLarge } from '../../../styles/globalStyles';
import Campaigninfo from './Campaigninfo';
import Marquee from 'react-fast-marquee';
import React, { Suspense, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles.module.scss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import SuspenseImg from '../../../components/suspense';
import { useWeb3React } from '@web3-react/core';
import { useCampaignsContract } from './../../../contracts/raisyCampaigns';
import { formatError } from '../../../utils';
import useBlockNumber from '../../../hooks/useBlockNumber';
import decentralizedwhite from '../../../images/decentralized_white.png';
import decentralizedblack from '../../../images/decentralized_black.png';

const renderMedia = (image, contentType) => {
  if (contentType === 'video' || image?.includes('youtube')) {
    return (
      <ReactPlayer
        className={styles.content}
        url={image}
        controls={true}
        width="100%"
        height="100%"
        style={{ borderRadius: 'inherit' }}
      />
    );
  } else if (contentType === 'embed') {
    return (
      <iframe
        title="cover-video"
        className={styles.content}
        src={image}
        style={{ borderRadius: 'inherit' }}
      />
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
          style={{ borderRadius: 'inherit' }}
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

  const VOTE_SESSION_DURATION = 84200;

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
      getBlockNumber.then((_blockNumber) => {
        const _isFinished =
          _blockNumber >= voteSession.startBlock + VOTE_SESSION_DURATION;
        setIsFinished(_isFinished);
      });
    }
  }, [voteSession]);

  useEffect(() => {
    console.log(schedule);
  }, [schedule]);

  return (
    <Box
      direction="row"
      height="100vh"
      width={'100vw'}
      backgroundImage={'/images/wavebg.png'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
    >
      <Box>
        <Flex direction="column" alignItems={'center'} paddingBottom={'20px'}>
          <Text
            textAlign={'center'}
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            style={{
              background:
                '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            fontWeight={'900'}
            width={'95vw'}
            marginLeft={'auto'}
            marginRight={'auto'}
          >
            {currentProject.title}
          </Text>
          {/* <Text textTransform="uppercase" textDecoration="underline" fontSize="13px" marginTop="-20px" marginLeft="5px">
                {currentProject.category}
              </Text> */}
          <SpacerLarge />
          <Box height="350px" style={{ borderRadius: '50px' }}>
            {renderMedia(currentProject.coverImageHash, 'image')}
          </Box>
        </Flex>
        <Campaigninfo
          currentProject={currentProject}
          fundingover={fundingover}
          schedule={schedule}
        />

        {/* {fundingover && account ? (
            <div>
              {currentProject.creator === account.toLowerCase() ? (
                <div>
                  {currentProject.amountToRaise - currentProject.amountRaised <
                  0 ? (
                    <>
                      {schedule.currentMilestone > 0 ? (
                        <>
                          {' '}
                          {voteSession.inProgress && !isFinished ? (
                            <div>Vote Stats</div>
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
                          <Text
                            padding={'20px'}
                            marginLeft={'auto'}
                            marginRight={'auto'}
                          >
                            You can claim funds now ! Click on the button below
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
                  {currentProject.amountToRaise - currentProject.amountRaised <
                  0 ? (
                    <div></div>
                  ) : (
                    <Flex>
                      display={account ? 'flex' : 'none'}
                      <Flex flexDirection={'column'} width={'100%'}>
                        <Text
                          padding={'20px'}
                          marginLeft={'auto'}
                          marginRight={'auto'}
                        >
                          The campaign is unsuccessful, or participants voted in
                          majority for a refund.
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
          )} */}
      </Box>
    </Box>
  );
}

export default Preview;

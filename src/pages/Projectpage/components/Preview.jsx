import { Image } from '@chakra-ui/image';
import { Flex, Text, Box, Center, Spacer } from '@chakra-ui/layout';
import {
  Vstack,
  Button,
  Link,
  useToast,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { SpacerLarge } from '../../../styles/globalStyles';
import Campaigninfo from './Campaigninfo';
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
import {
  FiMail,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiHeart,
} from 'react-icons/fi';

const renderMedia = (image, contentType) => {
  if (contentType === 'video' || image?.includes('youtube')) {
    return (
      <ReactPlayer
        className={styles.content}
        url={image}
        controls={true}
        width="100%"
        height="100%"
        style={{ borderRadius: '10px' }}
      />
    );
  } else if (contentType === 'embed') {
    return (
      <iframe
        title="cover-video"
        className={styles.content}
        src={image}
        style={{ borderRadius: '10px' }}
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
          style={{ borderRadius: '10px' }}
          src={`https://cloudflare-ipfs.com/ipfs/${image}`}
        />
      </Suspense>
    );
  }
};

function Preview({ currentProject, fundingover, schedule, voteSession }) {
  const { account } = useWeb3React();
  const currentBackground = useColorModeValue(
    'rgba(255,255,255,1)',
    'rgba(21,21,21,.64)'
  );
  const currentBorder = useColorModeValue(
    'rgba(235, 235, 235, 1)',
    'rgba(25,25,25,1)'
  );

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
    <Box height="100vh" width={'100vw'}>
      <Flex
        flexDirection={'row'}
        height={'-webkit-fill-available'}
        justifyContent={'center'}
      >
        <Flex
          width={'60vw'}
          flexDirection={'column'}
          gridGap={'15px'}
          paddingTop={'10px'}
        >
          <Flex
            flexDirection={'lign'}
            marginLeft={'auto'}
            marginRight={'auto'}
            gridGap={'30px'}
          >
            <Text
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              style={{
                textAlign: 'center',
                background:
                  '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent',
              }}
              fontWeight={'900'}
            >
              {currentProject.title}{' '}
            </Text>
            <Button
              borderRadius={'full'}
              style={{ borderColor: currentBorder }}
              backgroundColor={currentBackground}
              height={'60px'}
              width={'60px'}
              margin={'auto'}
              border={'1px solid'}
            >
              <FiHeart
                style={{ margin: 'auto', color: 'rgba(78, 213, 186, 1)' }}
              />
            </Button>
          </Flex>
          <HStack
            direction="row"
            alignItems="center"
            gridGap={'10px'}
            marginRight={'auto'}
            marginLeft={'auto'}
          >
            <Link
              style={{
                borderRadius: '40px',
                width: '40px',
                height: '40px',
                borderColor: currentBorder,
                border: '1px solid',
                backgroundColor: currentBackground,
                padding: '5px',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FiMail />
            </Link>
            <Link
              style={{
                borderRadius: '40px',
                width: '40px',
                height: '40px',
                borderColor: currentBorder,
                border: '1px solid',
                backgroundColor: currentBackground,
                padding: '5px',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {' '}
              <FiTwitter />
            </Link>
            <Link
              style={{
                borderRadius: '40px',
                width: '40px',
                height: '40px',
                borderColor: currentBorder,
                border: '1px solid',
                backgroundColor: currentBackground,
                padding: '5px',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {' '}
              <FiInstagram />
            </Link>
            <Link
              style={{
                borderRadius: '40px',
                width: '40px',
                height: '40px',
                borderColor: currentBorder,
                border: '1px solid',
                backgroundColor: currentBackground,
                padding: '5px',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {' '}
              <FiFacebook />
            </Link>
          </HStack>
          <Box
            height="350px"
            marginLeft={'auto'}
            marginRight={'auto'}
            paddingLeft={'30px'}
            paddingRight={'30px'}
          >
            {renderMedia(currentProject.coverImageHash, 'image')}
          </Box>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            padding={'30px'}
          >
            {!account ? (
              <>
                {' '}
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
                >
                  Login
                </Button>
              </>
            ) : fundingover ? (
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
                                    >
                                      End Vote Session
                                    </Button>
                                  </div>
                                ) : (
                                  <div>
                                    <Button
                                      onClick={handleAskMoreFunds}
                                      disabled={asking}
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
                                    >
                                      Ask More Funds
                                    </Button>
                                  </div>
                                )}
                              </div>
                            )}
                          </>
                        ) : (
                          <Box
                            display={'flex'}
                            textAlign={'center'}
                            justifyContent={'center'}
                            flexDirection={'column'}
                          >
                            <Text
                              marginLeft={'auto'}
                              marginRight={'auto'}
                              paddingBottom={'20px'}
                              fontSize={'3xl'}
                              fontWeight={'600'}
                            >
                              You can claim your funds now !
                            </Text>
                            <Button
                              onClick={handleClaimFunds}
                              disabled={claiming}
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
                            >
                              Claim your funds
                            </Button>
                          </Box>
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
                      <Box
                        display={'flex'}
                        textAlign={'center'}
                        justifyContent={'center'}
                        flexDirection={'column'}
                      >
                        <Text
                          marginLeft={'auto'}
                          marginRight={'auto'}
                          paddingBottom={'20px'}
                          fontSize={'3xl'}
                          fontWeight={'600'}
                        >
                          The campaign is unsuccessful, or participants voted in
                          majority for a refund.
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
                        >
                          Withdraw your donation
                        </Button>
                      </Box>
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
        </Flex>{' '}
        <Flex direction="column" width={'40vw'} padding={'40px'}>
          <Campaigninfo
            currentProject={currentProject}
            fundingover={fundingover}
            schedule={schedule}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
export default Preview;

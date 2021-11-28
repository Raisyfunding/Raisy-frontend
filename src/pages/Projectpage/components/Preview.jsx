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
import {
  FiMail,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiHeart,
} from 'react-icons/fi';
import{
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
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
    <Flex direction="column" height="100vh">
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
                            {/* {voteSession.inProgress && !isFinished ? ( */}
                            {schedule.currentMilestone !==
                            currentProject.nbnbMilestones ? (
                              <>
                                {0 > 0 ? (
                                  <VoteStats voteSession={voteSession} />
                                ) : (
                                  <div>
                                    {voteSession.inProgress ? (
                                      <div>
                                        <Button
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
                                        <Popover placement="bottom">
                                          <PopoverTrigger>
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
                                          </PopoverTrigger>
                                          <PopoverContent>
                                            <PopoverHeader fontWeight="semibold">
                                              Tell your community how are you
                                              going to spend this money ?
                                            </PopoverHeader>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                              <div>
                                                <div>
                                                  La daronne à l'abris les
                                                  frerot
                                                </div>
                                                <SpacerLarge />
                                                <Button
                                                  width={'100%'}
                                                  onClick={handleAskMoreFunds}
                                                  disabled={asking}
                                                >
                                                  Initialize a vote session
                                                </Button>
                                              </div>
                                            </PopoverBody>
                                          </PopoverContent>
                                        </Popover>
                                      </div>
                                    )}
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
                          fontSize={'2xl'}
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
        </Flex>
      </Flex>
    </Box>

  );
}

export default Preview;

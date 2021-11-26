import { Image } from '@chakra-ui/image';
import { Flex, Text, Box, Center, Spacer } from '@chakra-ui/layout';
import { Vstack, Button, Link } from '@chakra-ui/react';
import { SpacerLarge } from '../../../styles/globalStyles';
import Campaigninfo from './Campaigninfo';
import React, { Suspense } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles.module.scss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import SuspenseImg from '../../../components/suspense';
import security from '../../../images/security.png';
import moneybag from '../../../images/moneybag.png';
import handshake from '../../../images/handshake.png';
import { useWeb3React } from '@web3-react/core';

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

function Preview({ currentProject, fundingover }) {
  const { account } = useWeb3React();
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
            <Text fontSize="10px" marginLeft="5px">
              Help us out! Don't delay give today!
            </Text>
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
            />
            <SpacerLarge />
            {fundingover ? (
              <div>
                {currentProject.creator === account ? (
                  <div>
                    {currentProject.amountToRaise -
                      currentProject.amountRaised <
                    0 ? (
                      <div>
                        <Text
                          padding={'20px'}
                          marginLeft={'auto'}
                          marginRight={'auto'}
                        >
                          The fundrelease has been as success ! Claim you funds
                          now !
                        </Text>
                        <Button width={'100%'}>Claim your funds</Button>
                      </div>
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
              Raisy connects Creators with Donars to fund their project
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
              Releases partial fund after inspecting the Progress of the project
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

import { Image } from '@chakra-ui/image'
import { Flex, Text, Box, Center, Spacer } from '@chakra-ui/layout'
import { SpacerLarge } from '../../../styles/globalStyles'
import Campaigninfo from './Campaigninfo'
import React, { Suspense } from 'react'
import ReactPlayer from 'react-player'
import styles from './styles.module.scss'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import SuspenseImg from '../../../components/suspense'
import security from '../../../images/security.png'
import moneybag from '../../../images/moneybag.png'
import handshake from '../../../images/handshake.png'

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
    )
  } else if (contentType === 'embed') {
    return <iframe className={styles.content} src={image} />
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
        <SuspenseImg className={styles.content} src={image} />
      </Suspense>
    )
  }
}

function Preview({ currentProject }) {
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
              {renderMedia(
                'https://www.youtube.com/watch?v=9mJlZlldA84',
                'video'
              )}
            </Box>
          </Flex>
          <Spacer />
          <Box width="400px">
            <Campaigninfo currentProject={currentProject} />
          </Box>
        </Flex>
      </Box>
      <Box
        bg="#504D4D"
        width="100%"
        height="100px"
        position="relative"
        bottom="-58px"
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
  )
}

export default Preview

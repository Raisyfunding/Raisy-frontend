import React from 'react'
import Footer from '../../../../components/Footer/Footer'
import { Text, Image, Flex, Box } from '@chakra-ui/react'
import './Carousel.scss'

const FooterPage = () => {
  return (
    <Box height="100vh" width={'100vw'}>
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
        TRUSTED BY
      </Text>
      <Text
        fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }}
        style={{ textAlign: 'center' }}
        fontWeight={'400'}
        paddingTop={'30px'}
        paddingBottom={'30px'}
      >
        Join the Raisy experience. Raise funds, help people around the world
        without registration. <br /> Any idea or need can be funded, join us
        now.
      </Text>
      <div className="container">
        <div className="marquee-container">
          <Image src="/images/chainlink.png" width={'200px'} />
          <Image src="/images/avalanche.png" width={'200px'} />
        </div>
      </div>
      <Footer />
    </Box>
  )
}

export default FooterPage

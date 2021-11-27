import React from 'react';
import Footer from '../../../../components/Footer/Footer';
import { Text, Image, useColorModeValue, Box } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import chainlink from '../../../../images/chainlink.png';
import avalanche from '../../../../images/avalanche.png';
import chainlinkwhite from '../../../../images/chainlinkwhite.png';
import avalanchewhite from '../../../../images/avalanchewhite.png';
import alchemy from '../../../../images/alchemy-logo-black.png';
import alchemywhite from '../../../../images/alchemy-logo-white.png';

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
        POWERED BY
      </Text>
      <Text
        fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }}
        style={{ textAlign: 'center' }}
        fontWeight={'400'}
        paddingTop={'30px'}
        paddingBottom={'50px'}
      >
        Raisy takes advantage of industry leaders protocols. Discover them.
      </Text>
      <Marquee gradientColor={useColorModeValue([255, 255, 255], [0, 0, 0])}>
        <Image
          src={useColorModeValue(chainlink, chainlinkwhite)}
          height={'190px'}
          padding={'50px'}
        />
        <Image
          src={useColorModeValue(avalanche, avalanchewhite)}
          height={'190px'}
          padding={'50px'}
        />
        <Image
          src={useColorModeValue(alchemy, alchemywhite)}
          height={'190px'}
          padding={'50px'}
        />
      </Marquee>
      <Footer />
    </Box>
  );
};

export default FooterPage;

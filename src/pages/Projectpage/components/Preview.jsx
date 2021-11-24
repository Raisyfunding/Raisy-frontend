import { Image } from "@chakra-ui/image";
import { Flex, Text, Box, Center, Spacer } from "@chakra-ui/layout";
import { SpacerLarge, SpacerXSmall } from "../../../styles/globalStyles";
import Campaigninfo from "./Campaigninfo";
import React from "react";
import security from "../../../images/security.png"
import moneybag from "../../../images/moneybag.png"
import handshake from "../../../images/handshake.png"
import projectimage from "../../../images/Mixwarepic.png"

function Preview({ currentProject }) {
  return (
      <Flex direction="column" height='100vh'>
    <Box marginLeft="10%" marginRight="10%" marginTop="5%">
    <Flex direction="row" >
      <Flex direction="column"  >
          <Text textTransform="uppercase" textDecoration="underline" fontSize="10px" marginLeft="1%" >
              {currentProject.category}
          </Text>
          <Text fontWeight="bold" fontSize="80px" marginTop="-10px">
          {currentProject.title}
          </Text>
          <Text fontSize="10px" marginLeft="1vh" marginTop="-1vw">
          Help us out! Don't delay give today!
          </Text>
          <SpacerLarge />
          <Image
        src={projectimage}
        alt="project image"
     maxWidth="40vw"
         />
      </Flex>
      <Spacer />
      <Box width="400px">
      <Campaigninfo currentProject={currentProject}/>
      </Box>
    </Flex>
    </Box>
    <Box bg="#504D4D" width="100%" height="25vh" position="absolute" bottom="0vh">
    <Flex direction="row" alignContent="center" textAlign="center" marginTop="3vh">
    <Spacer />
        <Box maxWidth="15vw">
        <Text fontSize="1.2vw">
        Raisy connects Creators with Donars to fund their project 
        </Text>
        </Box>
        <Spacer />
        <Box maxWidth="15vw">
        <Text fontSize="1.2vw">
        Releases partial fund after inspecting the Progress of the project
        </Text>
        </Box>
        <Spacer />
        <Box  maxWidth="15vw">
        <Image
    src={handshake}
    alt="project image"
  />
        <Text fontSize="1.2vw">
        Refunds the unreleased funds if project turns out to be a scam
        </Text>
        </Box>
        <Spacer />
    </Flex>
    </Box>
    </Flex>
  );
}

export default Preview;

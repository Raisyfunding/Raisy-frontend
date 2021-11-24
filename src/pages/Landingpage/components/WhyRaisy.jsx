import { HStack, VStack } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import React from "react";
import decentralizedwhite from "../../../images/decentralizedwhite.png";
import decentralizedblack from "../../../images/decentralizedblack.png";
import inspirationblack from "../../../images/inspirationblack.png";
import inspirationwhite from "../../../images/inspirationwhite.png";
import searchwhite from "../../../images/searchwhite.png";
import searchblack from "../../../images/searchblack.png";
import togetherblack from "../../../images/togetherblack.png";
import togetherwhite from "../../../images/togetherwhite.png";
import shieldblack from "../../../images/shieldblack.png";
import shieldwhite from "../../../images/shieldwhite.png";
import rewardBlack from "../../../images/rewardblack.png";
import rewardWhite from "../../../images/rewardwhite.png";
import { SpacerXSmall, SpacerLarge } from "../../../styles/globalStyles";

function WhyRaisy() {
  return (
    <Box height="100vh">
      <Text
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        style={{ textAlign: "center" }}
      >
        Why <span style={{ color: "var(--blue)" }}>Raisy</span> ?
      </Text>
      <SpacerLarge />

      <VStack spacing="5em">
        <HStack spacing="8em">
          <Flex direction="column">
            <Image
              src={useColorModeValue(decentralizedblack, decentralizedwhite)}
              margin="auto"
              width='64px'
            />
            <SpacerXSmall />
            <Text
              fontSize="1xl"
              style={{ textAlign: "center" }}
              fontWeight="bold"
            >
              Decentralized
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center">
            <Image
              src={useColorModeValue(togetherblack, togetherwhite)}
              width="64px"
            />
            <SpacerXSmall />
            <Text
              fontSize="1xl"
              style={{ textAlign: "center" }}
              fontWeight="bold"
            >
              Community-driven
            </Text>
          </Flex>
          <Flex direction="column">
            <Image
              src={useColorModeValue(shieldblack, shieldwhite)}
              width="64px"
            />
            <SpacerXSmall />
            <Text
              fontSize="1xl"
              style={{ textAlign: "center" }}
              fontWeight="bold"
            >
              Secured
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center">
            <Image
              src={useColorModeValue(rewardBlack, rewardWhite)}
              width="64px"
            />
            <SpacerXSmall />
            <Text
              fontSize="1xl"
              style={{ textAlign: "center" }}
              fontWeight="bold"
            >
              Reward-based
            </Text>
          </Flex>
        </HStack>
        <HStack spacing="8em">
        <Flex direction="column">
            <Image
              src={useColorModeValue(searchblack, searchwhite)}
              margin="auto"
              width='160px'
              alignSelf="center"
            />
            <SpacerXSmall />
            <Text
              fontSize="2xl"
              style={{ textAlign: "center" }}
              fontWeight="bold"
              marginTop="10px"
            >
              Ready? Explore !
            </Text>
          </Flex>
          <Box width="1px" height="150px" bg="var(--blue)">
            </Box>
          <Flex direction="column" >
            <Image
              src={useColorModeValue(inspirationblack, inspirationwhite)}
              width="160px"
              alignSelf="center"
            />
            <SpacerXSmall />
            <Text
              fontSize="2xl"
              style={{ textAlign: "center" }}
              fontWeight="bold"
              marginTop="10px"
            >
              inspired? Let's go !
            </Text>
          </Flex>
        </HStack>
      </VStack>
    </Box>
  );
}

export default WhyRaisy;

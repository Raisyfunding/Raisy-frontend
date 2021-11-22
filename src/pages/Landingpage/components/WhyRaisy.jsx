import { HStack, VStack } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import React from "react";
import decentralizedwhite from "../../../images/decentralizedwhite.png";
import decentralizedblack from "../../../images/decentralizedblack.png";
import togetherblack from "../../../images/togetherblack.png";
import togetherwhite from "../../../images/togetherwhite.png";
import shieldblack from "../../../images/shieldblack.png";
import shieldwhite from "../../../images/shieldwhite.png";
import rewardBlack from "../../../images/rewardblack.png";
import rewardWhite from "../../../images/rewardwhite.png";
import { SpacerXSmall, SpacerLarge } from "../../../styles/globalStyles";
import Footer from "../../../components/Footer/Footer";

function WhyRaisy() {
  return (
    <div>
      <Text
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        style={{ textAlign: "center" }}
      >
        Why <span style={{ color: "var(--blue)" }}>Raisy</span> ?
      </Text>
      <SpacerLarge />
      <SpacerLarge />
      <VStack>
        <HStack spacing="10em">
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
          <Flex direction="column">
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
          <Flex direction="column">
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
        <HStack></HStack>
      </VStack>
    </div>
  );
}

export default WhyRaisy;

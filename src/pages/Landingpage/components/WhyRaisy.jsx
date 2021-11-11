import { HStack, VStack } from "@chakra-ui/react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import React from "react";
import decentralizedwhite from "../../../images/decentralizedwhite.png";
import decentralizedblack from "../../../images/decentralizedblack.png";
import togetherblack from "../../../images/togetherblack.png";
import togetherwhite from "../../../images/togetherwhite.png";
import { SpacerXSmall, SpacerSmall } from "../../../styles/globalStyles";

function WhyRaisy() {
  return (
    <div>
      <Text
        fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
        style={{ textAlign: "center" }}
      >
        Why <span style={{ color: "var(--blue)" }}>Raisy</span> ?
      </Text>
      <Box height="50px" />
      <VStack>
        <HStack spacing="8em">
          <Flex direction="column">
            <Image
              src={useColorModeValue(decentralizedblack, decentralizedwhite)}
              margin="auto"
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
              width="128px"
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
        </HStack>
        <HStack></HStack>
      </VStack>
    </div>
  );
}

export default WhyRaisy;

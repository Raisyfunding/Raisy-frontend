import { HStack, VStack } from "@chakra-ui/react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import React from "react";
import decentralizedwhite from "../../../images/decentralizedwhite.png";
import decentralizedblack from "../../../images/decentralizedblack.png";
import togetherblack from "../../../images/togetherblack.png";
import togetherwhite from "../../../images/togetherwhite.png";

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
        <HStack>
          <Flex direction="column" width="220px" height="200px">
            <Image
              src={useColorModeValue(decentralizedblack, decentralizedwhite)}
              margin="auto"
            />
            <Text
              fontSize="2xl"
              style={{ textAlign: "center" }}
              fontWeight="bold"
              marginRight="15px"
            >
              Decentralized
            </Text>
          </Flex>
          <Flex direction="column" width="220px" height="200px">
            <Image
              src={useColorModeValue(togetherblack, togetherwhite)}
              marginTop="20px"
            />
            <Text
              fontSize="2xl"
              style={{ textAlign: "center" }}
              fontWeight="bold"
              marginTop="13px"
              marginLeft="7px"
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

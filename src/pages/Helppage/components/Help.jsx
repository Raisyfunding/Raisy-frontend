import { Image } from "@chakra-ui/image";
import { Flex, Text, Box, Center } from "@chakra-ui/layout";
import { SpacerLarge, SpacerXSmall } from "../../../styles/globalStyles";
import React from "react";

function Help() {
  return (
    <Flex direction="column" alignSelf="center">
      <Text
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        style={{ textAlign: "center" }}
      >
        How <span style={{ color: "var(--blue)" }}>Raisy</span> works ?
      </Text>
      <Box height="30px"></Box>
      <Center>
        <Flex width="30%">
          <Text
            fontSize={{ base: "1xl", md: "1xl", lg: "1xl" }}
            style={{ textAlign: "center" }}
          >
            Raisy is a decentralised crowfunding platform focusses on donation
            crowdfunding. Anyone, anywhere in the world can fund your project.
            With both live crowdfunding campaigns and receiving fastest fundings
            now, there’s no better place to start the hunt for cool and clever
            innovations that surprise and delight.{" "}
          </Text>
        </Flex>
      </Center>
      <SpacerLarge />
      <Center>
        <Image
          src="https://via.placeholder.com/628x438"
          alt="Video"
          width="35%"
          height="auto"
        />
      </Center>
    </Flex>
  );
}

export default Help;

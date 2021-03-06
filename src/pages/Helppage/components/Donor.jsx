import { Image } from "@chakra-ui/image";
import { Flex, Text, Box, Center } from "@chakra-ui/layout";
import { SpacerLarge } from "../../../styles/globalStyles";
import React from "react";

function Help() {
  return (
    <Flex direction="column" alignSelf="center" height="100vh">
      <Text
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        style={{ textAlign: "center" }}
      >
        <span style={{ color: "var(--blue)" }}>Donor's</span> guide 
      </Text>
      <Box height="20px"></Box>
      <Center>
        <Flex width="50%">
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
          width="30%"
          height="auto"
        />
      </Center>
    </Flex>
  );
}

export default Help;

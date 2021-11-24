import { Image } from "@chakra-ui/image";
import { Flex, Text, Box, Center } from "@chakra-ui/layout";
import { SpacerLarge } from "../../../styles/globalStyles";
import React from "react";

function Explore() {
  return (
    <Flex direction="column" alignSelf="center" height="100vh">
      <Text
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        style={{ textAlign: "center" }}
      >
        Choose your <span style={{ color: "var(--blue)" }}>Category</span> 
      </Text>
      <Box height="20px"></Box>
      <Center>
        <Flex width="50%">
          <Text
            fontSize={{ base: "1xl", md: "1xl", lg: "1xl" }}
            style={{ textAlign: "center" }}
          >
            Raisy provdes wide range of categories of projects to choosefrom. You will find innovative ideas, support groups, research and devlopments team, art and culture enthusiasts. Their briliant minds deserves encouragement and support. Here are some top categories, dive in to find your perfect match to donate {" "}
          </Text>
        </Flex>
      </Center>
      <SpacerLarge />
      <Center>
        <Image
          src="https://via.placeholder.com/628x438"
          alt="Video"
          width="40%"
          height="auto"
        />
      </Center>
      <SpacerLarge />
      
    </Flex>
  );
}

export default Explore;

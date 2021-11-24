import { Image } from "@chakra-ui/image";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { Flex, Text, Box } from "@chakra-ui/layout";

import React from "react";

function Landing() {
  return (
    <Box height="100vh" >
      <Flex
        width="90vw"
        height="87%"
        margin="auto"
        textAlign="center"
        alignItems="center"
        justifyContent={"center"}
        flexDirection={{ base: "column", md: "row" }}
        gridGap="60px"
        id="page1"
      >
        <Flex flexDirection={"column"}>
          <Text
            maxWidth={"50vw"}
            textAlign={"justify"}
            marginBottom={"20px"}
            fontSize={{ base: "1xl", md: "1xl", lg: "2xl", xl: "2xl" }}
            color={useColorModeValue("var(--black)", "var(--white)")}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button width={"200px"}>Start a campaign</Button>
        </Flex>
        <Image maxWidth={"50vw"} src="https://via.placeholder.com/628x438" />
      </Flex>
    </Box>
  );
}

export default Landing;

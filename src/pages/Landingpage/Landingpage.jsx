import React from "react";
import * as f from "./Landing";
import { Screen } from "../../styles/globalStyles";
import { Box, Text, useColorModeValue, Flex, Image } from "@chakra-ui/react";
import logo from "../../images/logot.png";

function Landingpage() {
  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue("var(--white)", "var(--black)"),
      }}
    >
      <Flex
        width="90%"
        margin="auto"
        textAlign="center"
        flexDirection="column"
        gridGap="60px"
      >
        <Image margin="auto" src={logo} width="200px" />
        <Text
          fontFamily="sans-serif"
          fontSize="8xl"
          fontWeight="600"
          color={useColorModeValue("var(--black)", "var(--white)")}
        >
          Decentralized Crowdfunding platform
        </Text>
      </Flex>
    </Screen>
  );
}
export default Landingpage;

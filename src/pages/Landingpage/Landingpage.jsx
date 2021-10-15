import React from "react";
import * as f from "./Landing";
import { Screen, SpacerLarge } from "../../styles/globalStyles";
import { Text, useColorModeValue, Flex, Image } from "@chakra-ui/react";
import logo from "../../images/logot.png";

function Landingpage() {
  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue("var(--white)", "var(--black)"),
      }}
    >
      <SpacerLarge />
      <Flex
        width="90%"
        margin="auto"
        textAlign="center"
        flexDirection="column"
        gridGap="60px"
      >
        <Image
          margin="auto"
          src={logo}
          width={{ base: "150px", md: "200px" }}
        />
        <Text
          fontFamily="sans-serif"
          fontSize={{ base: "3xl", md: "5xl", lg: "7xl", xl: "8xl" }}
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

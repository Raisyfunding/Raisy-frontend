import { Image } from "@chakra-ui/image";
import { useColorModeValue } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";
import { SpacerLarge } from "../../../styles/globalStyles";
import logowhite from "../../../images/logotext.png";
import logodark from "../../../images/logotextdark.png";

import React from "react";

function Landing() {
  return (
    <div>
      <Flex
        width="90%"
        height="100%"
        margin="auto"
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        gridGap="60px"
        paddingBottom={{ base: "20px", md: "100px" }}
        id="page1"
      >
        <SpacerLarge />
        <Image
          margin="auto"
          src={useColorModeValue(logodark, logowhite)}
          width={{ base: "300px", md: "350px" }}
        />
        <Text
          fontFamily="sans-serif"
          fontSize={{ base: "5xl", md: "6xl", lg: "7xl", xl: "8xl" }}
          color={useColorModeValue("var(--black)", "var(--white)")}
        >
          Decentralized Crowdfunding platform
        </Text>
      </Flex>
    </div>
  );
}

export default Landing;

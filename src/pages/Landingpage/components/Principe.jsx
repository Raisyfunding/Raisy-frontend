import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import weconnectwhite2 from "../../../images/weconnectwhite2.png";
import weconnectblack2 from "../../../images/weconnectblack2.png";

function Principe() {
  return (
    <div>
      <Flex
        width="90%"
        height="100%"
        margin="auto"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
          style={{ textAlign: "center" }}
        >
          What is <span style={{ color: "var(--blue)" }}>Raisy</span> ?
        </Text>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Text fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}>
            Raisy <br />
            <span style={{ color: "var(--blue)" }}>connects </span> <br />
            people in need <br />
            with kind donors <br />
            all around the world.
          </Text>
          <Image
            src={useColorModeValue(weconnectblack2, weconnectwhite2)}
            height={{ base: "300px", lg: "400px" }}
            margin="auto"
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default Principe;

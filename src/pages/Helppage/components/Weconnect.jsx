import { Image } from "@chakra-ui/image";
import { Flex, Text, Box } from "@chakra-ui/layout";
import React from "react";
import ConnectBlack from "../../../images/Weconnectblack.JPG";
import ConnectWhite from "../../../images/Weconnectwhite.png";
import { useColorModeValue } from "@chakra-ui/react";

function Weconnect() {
  return (
    <Box height="100vh">
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
        <Image
          maxWidth={"50vw"}
          src={useColorModeValue(ConnectBlack, ConnectWhite)}
        />
        <Flex flexDirection={"column"}>
          <Text
            textAlign={"justify"}
            marginBottom={"20px"}
            fontSize={{ base: "4xl", md: "4xl", lg: "4xl", xl: "4xl" }}
          >
            WE CONNECT PEOPLE
          </Text>
          <Text
            maxWidth={"50vw"}
            textAlign={"justify"}
            marginBottom={"20px"}
            fontSize={{ base: "1xl", md: "1xl", lg: "2xl", xl: "2xl" }}
          >
            Raisy's crowdfunding campaigns are where new and groundbreaking
            products take flight, sometimes long before they hit mainstream
            availability. With thousands of campaigns launching every week,
            there's great tech, design, and much more around every corner —
            often with limited-time perks and pricing for the earliest donars.
            Before it's everywhere, it's on Raisy.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Weconnect;

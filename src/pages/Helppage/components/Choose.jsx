import { Flex, Text, Box, Center, Link } from "@chakra-ui/layout";
import { SpacerLarge } from "../../../styles/globalStyles";
import React from "react";
import { VStack } from "@chakra-ui/react";

function Choose() {
  return (
    <Flex direction="column" alignSelf="center" height="100%">
      <Text
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        style={{ textAlign: "center" }}
      >
        Are you a <span style={{ color: "var(--blue)" }}>Creator</span> or a{" "}
        <span style={{ color: "var(--blue)" }}>Donor</span> ?
      </Text>
      <SpacerLarge />
      <SpacerLarge />

      <Center>
        <Flex
          direction={{ base: "column", md: "row" }}
          gridGap="60px"
          width="90vw"
          height="87%"
          margin="auto"
          textAlign="center"
          alignItems="center"
          justifyContent={"center"}
        >
          <Link href="/creator"  style={{ textDecoration: "none" }}>
         
          
          <Box bg="gray.500" width="100%" borderRadius="3xl">
            <VStack margin="3em" justifyItems="center">
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                style={{ textAlign: "center" }}
              >
                Creator
              </Text>
              <Text fontSize={{ base: "1xl" }} style={{ textAlign: "center" }}>
                The person or team behind the project idea, working to bring it
                to life.
              </Text>
            </VStack>
          </Box>
          </Link>
          <Link href="/donor"  style={{ textDecoration: "none" }}>
          <Box bg="gray.500" width="100%" borderRadius="3xl">
            <VStack margin="3em">
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                style={{ textAlign: "center" }}
              >
                Donor
              </Text>
              <Text fontSize={{ base: "1xl" }} style={{ textAlign: "center" }}>
                The person or folks who pledge money to join creators in
                bringing projects to life
              </Text>
            </VStack>
          </Box>
          </Link>
        </Flex>
      </Center>
    </Flex>
  );
}

export default Choose;

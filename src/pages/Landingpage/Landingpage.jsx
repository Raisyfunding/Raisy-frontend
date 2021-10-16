import React from "react";
import { Screen, SpacerLarge } from "../../styles/globalStyles";
import { Text, useColorModeValue, Flex, Image } from "@chakra-ui/react";
import logo from "../../images/logot.png";
import fullpage from "../../components/Fullpage/fullpage";

function Landingpage() {
  new fullpage("#fullpage", {
    licenseKey: "ED0D5DA5-596F41E0-B51F15B6-293EC91D",
  });
  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue("var(--white)", "var(--black)"),
      }}
    >
      <div id="fullpage">
        <div class="section">
          <Flex
            width="90%"
            height="100%"
            margin="auto"
            textAlign="center"
            flexDirection="column"
            gridGap="60px"
            paddingBottom="60px"
            id="page1"
          >
            <SpacerLarge />
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
        </div>
        <div div class="section">
          <Flex
            width="90%"
            height="100%"
            margin="auto"
            textAlign="center"
            flexDirection="column"
            gridGap="60px"
            paddingBottom="60px"
            id="page1"
          >
            <SpacerLarge />
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
        </div>
      </div>
    </Screen>
  );
}
export default Landingpage;

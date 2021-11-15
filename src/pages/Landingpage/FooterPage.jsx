import React from "react";
import Footer from "../../components/Footer/Footer";
import { Text, Image, Flex } from "@chakra-ui/react";
import { SpacerLarge } from "../../styles/globalStyles";

const FooterPage = () => {
  return (
    <div>
      <Flex
        flexDirection={"column"}
        textAlign={"center"}
        padding={"50px"}
        margin={"auto"}
      >
        <Text fontSize={"3em"}>
          Backed by the <span style={{ color: "var(--blue)" }}>bests</span>
        </Text>
        <SpacerLarge />
        <SpacerLarge />
        <Flex flexDirection={"row"} gridGap={"100px"} justifyContent={"center"}>
          <Image src="/images/chainlink.png" width={"200px"} />
          <Image src="/images/avalanche.png" width={"200px"} />
        </Flex>
        <SpacerLarge />
        <SpacerLarge />
        <SpacerLarge />
        <SpacerLarge />
        <SpacerLarge />
      </Flex>
      <Footer />
    </div>
  );
};

export default FooterPage;

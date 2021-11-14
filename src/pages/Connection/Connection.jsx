import React, { useEffect } from "react";
import { Screen } from "../../styles/globalStyles";
import fullpage from "../../components/Fullpage/fullpage";

import {
  Button,
  Divider,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Connection = () => {
  useEffect(() => {
    new fullpage("#fullpage", {
      licenseKey: "ED0D5DA5-596F41E0-B51F15B6-293EC91D",
    });
  }, []);
  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue("var(--white)", "var(--black)"),
      }}
    >
      <div id="fullpage">
        <div class="section">
          <Flex
            maxWidth={"400px"}
            flexDirection={"column"}
            gridGap={"20px"}
            margin={"auto"}
            paddingTop={"200px"}
            textAlign={"center"}
          >
            <Button> Connect with Metamask</Button>
            <Button>Connect with WalletConnect</Button>
            <Button>Connect with DeFi Wallet</Button>
            <Text>
              By continuing, you agree to our <Link>terms of use</Link>.
            </Text>
            <Divider
              borderColor={{
                backgroundColor: useColorModeValue(
                  "var(--black)",
                  "var(--white)"
                ),
              }}
            />
            <Text>
              Don't know where to start? <Link>Get Started</Link>
            </Text>
          </Flex>
        </div>
      </div>
    </Screen>
  );
};

export default Connection;

import React, { useEffect } from "react";
import { Screen } from "../../styles/globalStyles";
import { useColorModeValue } from "@chakra-ui/react";
import fullpage from "../../components/Fullpage/fullpage";
import Help from "./components/Help";
import Choose from "./components/Choose";
import Weconnect from "./components/Weconnect";

const Helpcreator = () => {
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
          <Help />
        </div>
        <div class="section">
          <Choose />
        </div>
        <div class="section">
          <Weconnect />
        </div>
      </div>
    </Screen>
  );
};

export default Helpcreator;

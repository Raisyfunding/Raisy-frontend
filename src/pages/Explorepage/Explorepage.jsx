import Explore from "./components/Explore";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Screen } from "../../styles/globalStyles";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Explorepage = () => (
  <Screen style={{
backgroundColor: useColorModeValue("var(--white)", "var(--black)"),
}}>
  <ReactFullpage
    //fullpage options
    licenseKey={"ED0D5DA5-596F41E0-B51F15B6-293EC91D"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <>
          <div className="section fp-auto-height">
            <Explore />
          </div>
        </>
      );
    }}
    />
    </Screen>
);
export default Explorepage;

import Landing from "./components/Landing";
import Popular from "./components/Popular/Popular";
import WhyRaisy from "./components/WhyRaisy";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Landingpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"ED0D5DA5-596F41E0-B51F15B6-293EC91D"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <>
          {/* <Screen> */}
          <div className="section fp-auto-height">
            <Landing />
          </div>
          <div className="section fp-auto-height">
            <Popular />
          </div>
          <div className="section fp-auto-height">
            <WhyRaisy />
          </div>
          {/* </Screen> */}
        </>
      );
    }}
  />
);
export default Landingpage;

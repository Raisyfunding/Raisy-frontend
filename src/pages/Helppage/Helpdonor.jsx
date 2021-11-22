import Donor from "./components/Donor";

import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

const Helpdonor = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'ED0D5DA5-596F41E0-B51F15B6-293EC91D'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
          <div>
          <div className="section">

          <Donor />
     
          </div>
          {/* <div className="section">
          <Popular />
          </div>
          <div className="section">
          <WhyRaisy />
          </div> */}
          </div>
      );
    }}
    
  />
);
export default Helpdonor;
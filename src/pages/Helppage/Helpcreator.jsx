import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Helppage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'ED0D5DA5-596F41E0-B51F15B6-293EC91D'}
    scrollingSpeed = {1000} /* Options here */
    
    render={({ state, fullpageApi }) => {
      return (
          <div>
            
          </div>
      );
    }}
    
  />
);
export default Helppage;
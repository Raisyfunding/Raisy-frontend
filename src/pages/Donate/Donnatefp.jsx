import React from 'react';
import { Screen } from '../../styles/globalStyles';
import { useColorModeValue } from '@chakra-ui/react';
import ReactFullpage from '@fullpage/react-fullpage';
import Donate from './Donate';

function Donnatefp() {
  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue('var(--white)', 'var(--black)'),
      }}
    >
      <ReactFullpage
        //fullpage options
        licenseKey={'ED0D5DA5-596F41E0-B51F15B6-293EC91D'}
        scrollingSpeed={1000} /* Options here */
        dragAndMove={true}
        responsiveWidth={992}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <div className="section fp-auto-height">
                <Donate />
              </div>
            </>
          );
        }}
      />
    </Screen>
  );
}
export default Donnatefp;

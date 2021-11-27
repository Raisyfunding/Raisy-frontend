import React, { useEffect, useState } from 'react';
import { Screen } from '../../styles/globalStyles';
import { useColorModeValue } from '@chakra-ui/react';
import Landing from './components/Landing';
import Popular from './components/Popular/Popular';
import WhyRaisy from './components/WhyRaisy';
import { useApi } from './../../api';
import ReactFullpage from '@fullpage/react-fullpage';
import FooterPage from './components/Footer/FooterPage';
import StakingStats from './components/StakingStats';

function Landingpage() {
  const { fetchAllCampaigns } = useApi();
  const [allCampaigns, setAllCampaigns] = useState([]);

  // const { authToken } = useSelector(state => state.ConnectWallet)

  useEffect(() => {
    fetchAllCampaigns().then((campaigns) => {
      setAllCampaigns(campaigns.data);
    });
  }, []);

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
                <Landing />
              </div>
              <div className="section fp-auto-height">
                <Popular popularCampaigns={allCampaigns} />
              </div>
              <div className="section fp-auto-height">
                <StakingStats />
              </div>
              <div className="section fp-auto-height">
                <WhyRaisy />
              </div>
              <div className="section fp-auto-height">
                <FooterPage />
              </div>
            </>
          );
        }}
      />
    </Screen>
  );
}
export default Landingpage;

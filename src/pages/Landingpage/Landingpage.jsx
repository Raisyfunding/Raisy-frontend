import React, { useEffect, useState } from 'react'
import { Screen } from '../../styles/globalStyles'
import { useColorModeValue } from '@chakra-ui/react'
import Landing from './components/Landing'
import Popular from './components/Popular/Popular'
import WhyRaisy from './components/WhyRaisy'
import { useApi } from './../../api'
import { useSelector } from 'react-redux'
import ReactFullpage from '@fullpage/react-fullpage'
import FooterPage from './FooterPage'

function Landingpage() {
  const { fetchAllCampaigns } = useApi()
  const [allCampaigns, setAllCampaigns] = useState([])

  // const { authToken } = useSelector(state => state.ConnectWallet)

  useEffect(() => {
    fetchAllCampaigns().then(campaigns => {
      setAllCampaigns(campaigns.data)
    })
  }, [])

  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue('var(--white)', 'var(--black)')
      }}
    >
      <ReactFullpage
        //fullpage options
        licenseKey={'ED0D5DA5-596F41E0-B51F15B6-293EC91D'}
        scrollingSpeed={1000}
        scrollOverflow={'true'}
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
                <WhyRaisy />
              </div>
              <div className="section fp-auto-height">
                <FooterPage />
                {/* <Footer /> */}
              </div>
            </>
          )
        }}
      />
    </Screen>
  )
}
export default Landingpage

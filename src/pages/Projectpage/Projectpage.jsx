import Preview from './components/Preview'
import { Footer } from '../../components/index'
import React, { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { Screen } from '../../styles/globalStyles'
import { useColorModeValue } from '@chakra-ui/color-mode'
import Campaigndetail from './components/Campaigndetail'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useApi } from './../../api/index'

const Projectpage = () => {
  const { campaignId } = useParams()

  const { fetchCampaignById } = useApi()

  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    fetchCampaignById(campaignId).then((_campaign) => {
      setCampaign(_campaign.data)
    })
  }, [campaignId])

  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue('var(--white)', 'var(--black)'),
      }}
    >
      <ReactFullpage
        licenseKey={'ED0D5DA5-596F41E0-B51F15B6-293EC91D'}
        scrollingSpeed={1000} /* Options here */
        scrollOverflow={'true'}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <div className="section fp-auto-height">
                <Preview currentProject={campaign} />
              </div>
              <div className="section fp-auto-height">
                <Campaigndetail currentProject={campaign} />
                <Footer />
              </div>
            </>
          )
        }}
      />
    </Screen>
  )
}
export default Projectpage

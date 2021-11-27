import Preview from './components/Preview';
import { Footer } from '../../components/index';
import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Screen, SpacerMedium } from '../../styles/globalStyles';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Campaigndetail from './components/Campaigndetail';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useApi } from './../../api/index';
import Space from './components/space';

const Projectpage = () => {
  const { campaignId } = useParams();

  const {
    fetchCampaignById,
    fetchScheduleByCampaignId,
    fetchVoteSessionByCampaignId,
  } = useApi();

  const [campaign, setCampaign] = useState({});
  const [voteSession, setVoteSession] = useState({});
  const [schedule, setSchedule] = useState({ currentMilestone: 0 });

  const [fundingover, setFundingover] = useState(false);

  const fundingOver = () => {
    const remainingTime =
      new Date(campaign.endAt).getTime() - new Date().getTime();
    if (remainingTime > 0) {
      setFundingover(false);
    } else {
      setFundingover(true);
    }
  };

  useEffect(() => {
    fetchCampaignById(campaignId).then((_campaign) => {
      setCampaign(_campaign.data);
    });
    // react-hooks exhaustive-deps
  }, [campaignId]);

  useEffect(() => {
    if (campaign.campaignId && campaign.nbMilestones) {
      fetchScheduleByCampaignId(campaign.campaignId).then((_schedule) =>
        _schedule && _schedule.data ? setSchedule(_schedule) : null
      );
    }
  }, [campaign]);

  useEffect(() => {
    if (campaign.campaignId && campaign.nbMilestones) {
      fetchVoteSessionByCampaignId(campaign.campaignId).then((_voteSession) =>
        _voteSession && _voteSession.data ? setVoteSession(_voteSession) : null
      );
    }
  }, [campaign]);

  useEffect(() => {
    fundingOver();
    // react-hooks exhaustive-deps
  }, [campaign]);

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
                <Preview
                  currentProject={campaign}
                  fundingover={fundingover}
                  schedule={schedule}
                  voteSession={voteSession}
                />
              </div>
              <div className="section fp-auto-height">
                <Campaigndetail
                  currentProject={campaign}
                  schedule={schedule}
                  fundingover={fundingover}
                />
                <Space />
                <Footer />
              </div>
            </>
          );
        }}
      />
    </Screen>
  );
};
export default Projectpage;

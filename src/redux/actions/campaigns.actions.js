import CampaignsConstants from "../../constants/campaigns.constants";

const CampaignsActions = {
  fetchStart, 
  fetchSuccess,
  fetchFailed
}

function fetchStart() {
  return dispatch => {
    dispatch({
      type: CampaignsConstants.FETCH_CAMPAIGNS_START,
    });
  };
}

function fetchSuccess(campaigns) {
  return dispatch => {
    dispatch(_fetchSuccess(campaigns));
  };
}

const _fetchSuccess = campaigns => {
  return {
    type: CampaignsConstants.FETCH_CAMPAIGNS_SUCCESS,
    campaigns,
  };
};

function fetchFailed() {
  return dispatch => {
    dispatch({
      type: CampaignsConstants.FETCH_CAMPAIGNS_FAILED,
    });
  };
}

export default CampaignsActions;
import CampaignsConstants from "../../constants/campaigns.constants";

const initialState = {
	campaigns: [],
	campaignsLoading: false,
};

export function Campaigns(state = initialState, action) {
	switch (action.type) {
		case CampaignsConstants.FETCH_CAMPAIGNS_START: {
			return {
				...state,
				campaignsLoading: true,
			};
		}
		case CampaignsConstants.FETCH_CAMPAIGNS_SUCCESS: {
			return {
				campaigns: action.campaigns,
				campaignsLoading: false,
			};
		}
		case CampaignsConstants.FETCH_CAMPAIGNS_FAILED: {
			return {
				campaigns: [],
				campaignsLoading: false,
			};
		}
		default: {
			return state;
		}
	}
}

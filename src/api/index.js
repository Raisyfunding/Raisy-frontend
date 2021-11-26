import { ChainId } from '@sushiswap/sdk';
import axios from 'axios';
import { EXPLORER_URL } from '../constants/network';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

export const useApi = () => {
  // eslint-disable-next-line no-unused-vars
  const explorerUrl = EXPLORER_URL[isMainnet ? ChainId.MATIC : ChainId.RINKEBY];

  const apiUrl = isMainnet
    ? 'https://api.raisyfunding.com'
    : 'https://raisy-api.herokuapp.com';

  const getNonce = async (address, authToken) => {
    const res = await axios({
      method: 'get',
      url: `${apiUrl}/account/nonce/${address}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return res.data;
  };

  const getAuthToken = async (address) => {
    let result = await axios({
      method: 'post',
      url: `${apiUrl}/auth/getToken`,
      data: JSON.stringify({ address: address }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (result.data.status === 'success') {
      let token = result.data.token;
      return token;
    }
    return null;
  };

  const getAccountDetails = async (authToken) => {
    const res = await axios({
      method: 'get',
      url: `${apiUrl}/account/getaccountinfo`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return res.data;
  };

  const fetchAllCampaigns = async () => {
    const res = await axios({
      method: 'get',
      url: `${apiUrl}/campaign/fetchAllCampaigns`,
    });
    return res.data;
  };

  const fetchCampaignById = async (_id) => {
    const res = await axios.get(`${apiUrl}/campaign/getCampaign/${_id}`);
    return res.data;
  };

  const fetchScheduleByCampaignId = async (_campaignId) => {
    const res = await axios.get(
      `${apiUrl}/schedule/getSchedule/${_campaignId}`
    );
    return res.data;
  };

  return {
    fetchScheduleByCampaignId,
    apiUrl,
    getNonce,
    getAuthToken,
    getAccountDetails,
    fetchAllCampaigns,
    fetchCampaignById,
  };
};

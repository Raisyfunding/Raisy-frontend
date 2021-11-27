import { ChainId } from '@sushiswap/sdk';

import { calculateGasMargin, getHigherGWEI } from '../utils';
import useContract from '../hooks/useContract';

import RaisyCampaigns from '../abi/RaisyCampaigns.json';
import { Contracts } from '../constants/network';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? ChainId.MATIC : ChainId.RINKEBY;

export const useCampaignsContract = () => {
  const { getContract } = useContract();

  const getCampaignsContract = async () => {
    return await getContract(Contracts[CHAIN].raisyCampaigns, RaisyCampaigns);
  };

  const addCampaign = async (duration, amount, from) => {
    const contract = await getCampaignsContract();
    const args = [duration, amount];

    const options = { from, gasPrice: getHigherGWEI() };

    const gasEstimate = await contract.estimateGas[
      'addCampaign(uint256,uint256)'
    ](...args, options);
    options.gasLimit = calculateGasMargin(gasEstimate);

    return await contract['addCampaign(uint256,uint256)'](...args, options);
  };

  const addCampaignReleaseSchedule = async (
    duration,
    amount,
    nbMilestones,
    pctReleasePerMilestone,
    from
  ) => {
    const contract = await getCampaignsContract();
    const args = [duration, amount, nbMilestones, pctReleasePerMilestone];

    const options = { from, gasPrice: getHigherGWEI() };

    const gasEstimate = await contract.estimateGas[
      'addCampaign(uint256,uint256,uint256,uint256[])'
    ](...args, options);
    options.gasLimit = calculateGasMargin(gasEstimate);

    return await contract['addCampaign(uint256,uint256,uint256,uint256[])'](
      ...args,
      options
    );
  };

  const donateERC20 = async (campaignId, amount, payToken, from) => {
    const contract = await getCampaignsContract();

    const options = { from, gasPrice: getHigherGWEI() };

    return await contract.donate(campaignId, amount, payToken, options);
  };

  const claimProofOfDonation = async (campaignId, from) => {
    const contract = await getCampaignsContract();

    const options = { from, gasPrice: getHigherGWEI() };

    return await contract.claimProofOfDonation(campaignId, options);
  };

  const getAmountDonated = async (donor, campaignId, payToken) => {
    const contract = await getCampaignsContract();

    return await contract.getAmountDonated(donor, campaignId, payToken);
  };

  const claimInitialFunds = async (campaignId, from) => {
    const contract = await getCampaignsContract();

    const options = { from, gasPrice: getHigherGWEI() };

    return await contract.claimInitialFunds(campaignId, options);
  };

  const claimNextFunds = async (campaignId, from) => {
    const contract = await getCampaignsContract();

    const options = { from, gasPrice: getHigherGWEI() };

    return await contract.endVoteSession(campaignId, options);
  };

  const askMoreFunds = async (campaignId, from) => {
    const contract = await getCampaignsContract();

    const options = { from, gasPrice: getHigherGWEI() };

    return await contract.askMoreFunds(campaignId, options);
  };

  return {
    askMoreFunds,
    claimInitialFunds,
    claimNextFunds,
    getAmountDonated,
    getCampaignsContract,
    addCampaign,
    addCampaignReleaseSchedule,
    donateERC20,
    claimProofOfDonation,
  };
};

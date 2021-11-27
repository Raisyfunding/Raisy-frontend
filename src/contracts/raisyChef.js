import { ChainId } from '@sushiswap/sdk';

import { calculateGasMargin, getHigherGWEI } from '../utils';
import useContract from '../hooks/useContract';

import RaisyChef from '../abi/RaisyChef.json';
import { Contracts } from '../constants/network';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? ChainId.MATIC : ChainId.RINKEBY;

export const useChefContract = () => {
  const { getContract } = useContract();

  const getChefContract = async () => {
    return await getContract(Contracts[CHAIN].raisyChef, RaisyChef);
  };

  const getPendingRewards = async (campaignId, account) => {
    const contract = await getChefContract();

    return await contract.pendingReward(campaignId, account);
  };

  return { getPendingRewards };
};

import { ChainId } from '@sushiswap/sdk';

import useContract from '../hooks/useContract';

import RaisyNFT from '../abi/RaisyNFT.json';
import { Contracts } from '../constants/network';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? ChainId.MATIC : ChainId.RINKEBY;

export const useNftContract = () => {
  const { getContract } = useContract();

  const getNftContract = async () => {
    return await getContract(Contracts[CHAIN].raisyNFT, RaisyNFT);
  };

  const getProofOfDonation = async (tokenId) => {
    const contract = await getNftContract();

    return await contract.getDonationInfo(tokenId);
  };

  const getProofsOfDonation = async (account) => {
    const contract = await getNftContract();

    const balanceOf = await contract.balanceOf(account);

    let all = [];

    for (let index = 0; index < Number(balanceOf); index++) {
      const _tokenId = await contract.tokenOfOwnerByIndex(account, index);
      const _donationInfo = await contract.getDonationInfo(_tokenId);

      all.push(_donationInfo);
    }

    return all;
  };

  return { getProofsOfDonation, getProofOfDonation };
};

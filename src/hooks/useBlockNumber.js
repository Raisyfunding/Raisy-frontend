import { useCallback } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { ChainId } from '@sushiswap/sdk';
import { RPC_URL } from '../constants/network';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? ChainId.MATIC : ChainId.RINKEBY;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { chainId } = useWeb3React();

  const getBlockNumber = useCallback(async () => {
    if (chainId) {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const blockNumber = await provider.getBlockNumber();

      return blockNumber;
    } else {
      const provider = new ethers.providers.JsonRpcProvider(
        RPC_URL[CHAIN],
        isMainnet ? 137 : 4
      );

      const blockNumber = await provider.getBlockNumber();

      return blockNumber;
    }
  }, [chainId]);

  return { getBlockNumber };
};

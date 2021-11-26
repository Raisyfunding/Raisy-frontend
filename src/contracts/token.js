import useContract from '../hooks/useContract';

import {
  ERC20_CONTRACT_ABI,
  ERC721_CONTRACT_ABI,
} from './abi';

export const useTokenContract = () => {
  const { getContract } = useContract();

  const getERC20Contract = async address =>
    await getContract(address, ERC20_CONTRACT_ABI);

  const getERC721Contract = async address =>
    await getContract(address, ERC721_CONTRACT_ABI);


  return { getERC20Contract, getERC721Contract };
};
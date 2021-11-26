import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.MATIC]: {
    raisyChef: '',
    raisyCampaigns: '', // Proxy Address
    raisyNFT: '',
    raisyPriceFeed: '',
    raisyToken: '',
    raisyTokenRegistry: '',
    raisyAddressRegistry: '',
  },
  [ChainId.MATIC_TESTNET]: {
    raisyChef: '0x8833E49554eAC434db6dB0cB734F67b7b35d8862',
    raisyCampaigns: '0x6821944AE224dC43d21C3B3E367204f7FA7a00de', // Proxy Address
    raisyNFT: '0x4B4CD6961393353ec7D6e429E0B930DB99D4f7ec',
    raisyPriceFeed: '0x69EEADEC31B227B3ceE08968A7666B99f2707291',
    raisyToken: '0x528e3E530343fCD2f2c50D0858bb67282C8bfdF7',
    raisyTokenRegistry: '0xdBa991C797896596Eb44dc470560441cF99aD639',
    raisyAddressRegistry: '0x15A54ff85FD2fEF34312E1e2ECCb392A99989D4d',
  },
};

export const EXPLORER_URL = {
  [ChainId.MATIC]: 'https://polygonscan.com/',
  [ChainId.MATIC_TESTNET]: 'https://mumbai.polygonscan.com/',
};

export const RPC_URL = {
  [ChainId.MATIC]:
    'https://polygon-mainnet.g.alchemy.com/v2/aPcjgj5fHH3dxdhQFiqsm4ROAKa8oTIt',
  [ChainId.MATIC_TESTNET]:
    'https://polygon-mumbai.g.alchemy.com/v2/inzj9DkLzLHU_ufVjmpOgjRamnhKGuTL',
};

export const AVERAGE_BLOCK_TIME = {
  [ChainId.MATIC]: 2,
  [ChainId.MATIC_TESTNET]: 2,
};

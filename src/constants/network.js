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
  [ChainId.RINKEBY]: 'Matic Testnet',
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
  [ChainId.RINKEBY]: {
    raisyChef: '0xe076109D85c174fDc39b6c45DfD60ADBC6596479',
    raisyCampaigns: '0x1A87cA16Ca51d5e1EE6cc18Ad6B171DFcca5138c', // Proxy Address
    raisyNFT: '0xbFc78ca0F09F013eB7c55C05CD76ddd27411c617',
    raisyPriceFeed: '0x82B73D8A723E9D80b599bD640f4a4c9deD1AD5B0',
    raisyToken: '0xf08f2C8F8453d873fc0f703c574Cf5DF7bc2259B',
    raisyTokenRegistry: '0x8dC9c9C6ae3083a7c7436F36576e60D03117Eb2c',
    raisyAddressRegistry: '0x8e6541abF20464CA18Cb9e73cca9483c6059EAef',
  },
};

export const EXPLORER_URL = {
  [ChainId.MATIC]: 'https://polygonscan.com/',
  [ChainId.RINKEBY]: 'https://mumbai.polygonscan.com/',
};

export const RPC_URL = {
  [ChainId.MATIC]:
    'https://polygon-mainnet.g.alchemy.com/v2/aPcjgj5fHH3dxdhQFiqsm4ROAKa8oTIt',
  [ChainId.RINKEBY]:
    'https://eth-rinkeby.alchemyapi.io/v2/RqYsVJ9S0hzvka5xcIlrw8T1Zvo0q3O1',
};

export const AVERAGE_BLOCK_TIME = {
  [ChainId.MATIC]: 2,
  [ChainId.RINKEBY]: 15,
};

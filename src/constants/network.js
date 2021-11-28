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
    raisyChef: '0xE002d97849d974078824Fe69f0Ee8Cd6051aBb59',
    raisyCampaigns: '0x2adCD48FC888f183b9E0f96061553dc6D6F1745C', // Proxy Address
    raisyNFT: '0x05DF575FC17D906A3a0990BE751Db0e6519fC13d',
    raisyPriceFeed: '0xD37A742676B8eD81226efE410EF43af4cbD197DF',
    raisyToken: '0x2E402fB11B20C835C7f77B5Fe219DfDB5726F17c',
    raisyTokenRegistry: '0x1b327ba8DA91f3483c488E559fF42eA9aB92b6D6',
    raisyAddressRegistry: '0x1f3C24cd3C50EF367F931966d73b6E99f5f89A19',
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

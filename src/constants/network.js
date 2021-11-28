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
    raisyChef: '0x87D24D80fe4Fd2CFB196f5457197432fD02762CA',
    raisyCampaigns: '0x43FdC0870A493fBAaf01A3f7217317a61A0c7e82', // Proxy Address
    raisyNFT: '0x13c26fF52C2f3F516a42ddDf316860F9e5569E44',
    raisyPriceFeed: '0x64e07b441AAe53e2eF280883672e2Db66fD7F5e9',
    raisyToken: '0x31Dbc15a31dE8248703861ee4D027Ee3d1Ed6689',
    raisyTokenRegistry: '0xD8c2Ce5C26Bd86F81EFB7Cfc64838F2F6d781a3e',
    raisyAddressRegistry: '0xbAbc86dF2Db0B7a42F262839ce6Cf5eA904f0D70',
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

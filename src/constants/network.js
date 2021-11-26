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
    raisyChef: '0x8833E49554eAC434db6dB0cB734F67b7b35d8862',
    raisyCampaigns: '0xdBa991C797896596Eb44dc470560441cF99aD639', // Proxy Address
    raisyNFT: '0xEc693DD101039555F4dD1B3772A8660b74Fd396D',
    raisyPriceFeed: '0xbD390e6e01C25dEDF6010F8d4e8a6b19ac1f79AF',
    raisyToken: '0x528e3E530343fCD2f2c50D0858bb67282C8bfdF7',
    raisyTokenRegistry: '0xB6e99416EbBb5E605f489FD5456dB762474A744c',
    raisyAddressRegistry: '0x36DfA5f115D46C917608fdC15B3e9b8B4f268ACB',
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

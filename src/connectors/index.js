import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import RAISY_LOGO_URL from '../assets/svgs/logotext.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.MATIC]:
        'https://polygon-mainnet.g.alchemy.com/v2/aPcjgj5fHH3dxdhQFiqsm4ROAKa8oTIt',
    }
  : {
      [ChainId.RINKEBY]:
        'https://eth-rinkeby.alchemyapi.io/v2/RqYsVJ9S0hzvka5xcIlrw8T1Zvo0q3O1',
    };

export const network = new NetworkConnector({
  defaultChainId: ChainId.MATIC,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        137, // matic
      ]
    : [
        4, // matic testnet
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://polygon-rpc.com/',
  appName: 'Raisy',
  appLogoUrl: RAISY_LOGO_URL,
});

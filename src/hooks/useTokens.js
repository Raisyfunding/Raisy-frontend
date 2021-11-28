import { ChainId } from '@sushiswap/sdk';

// import iconFTM from 'assets/imgs/ftm.png';
import iconWMATIC from '../assets/imgs/wmatic.png';
import iconWBTC from '../assets/imgs/wbtc.png';
import iconWETH from '../assets/imgs/weth.png';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const Tokens = {
  [ChainId.MATIC]: [
    {
      address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      decimals: 18,
      icon: iconWMATIC,
    },
    {
      address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWETH,
    },
    {
      address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      name: 'Wrapped Bitcoin',
      symbol: 'WETH',
      decimals: 8,
      icon: iconWBTC,
    },
  ],
  [ChainId.RINKEBY]: [
    // {
    //   address: '0xdf032bc4b9dc2782bb09352007d4c57b75160b15',
    //   name: 'Wrapped Matic',
    //   symbol: 'WMATIC',
    //   decimals: 18,
    //   icon: iconWMATIC,
    // },
    {
      address: '0xE86402F145cD4ed1c413eEc94D518C5aA3e79A79',
      name: 'Raisy',
      symbol: 'RSY',
      decimals: 18,
      icon: iconWMATIC,
    },
    {
      address: '0xc778417e063141139fce010982780140aa0cd5ab',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWETH,
    },
    {
      address: '0x577d296678535e4903d59a4c929b718e1d575e0a',
      name: 'Wrapped Bitcoin',
      symbol: 'WBTC',
      decimals: 8,
      icon: iconWBTC,
    },
  ],
};

export default function useTokens() {
  const chain = isMainnet ? ChainId.MATIC : ChainId.RINKEBY;

  const tokens = Tokens[chain];

  const getTokenByAddress = (addr) => {
    const address =
      !addr ||
      addr === '0x0000000000000000000000000000000000000000' ||
      addr === 'matic'
        ? ''
        : addr;
    return (tokens || []).find(
      (tk) => tk.address.toLowerCase() === address.toLowerCase()
    );
  };

  return { getTokenByAddress, tokens };
}

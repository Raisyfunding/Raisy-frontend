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
  [ChainId.MATIC_TESTNET]: [
    {
      address: '0x9c3c9283d3e44854697cd22d3faa240cfb032889',
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      decimals: 18,
      icon: iconWMATIC,
    },
    {
      address: '0x3c68ce8504087f89c640d02d133646d98e64ddd9',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWETH,
    },
    {
      address: '0x0d787a4a1548f673ed375445535a6c7a1ee56180',
      name: 'Wrapped Bitcoin',
      symbol: 'WBTC',
      decimals: 8,
      icon: iconWBTC,
    },
  ],
};

export default function useTokens() {
  const chain = isMainnet ? ChainId.MATIC : ChainId.MATIC_TESTNET;

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

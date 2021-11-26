import { getAddress } from '@ethersproject/address';
import { ethers } from 'ethers';

import MetamaskErrors from '../constants/errors';

function isValidCode(code) {
  return code in MetamaskErrors ? true : false;
}

export function isAddress(value) {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}
export function shortenAddress(address, chars = 4) {
  if (!address) return '';

  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}

export const getHigherGWEI = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const price = (await provider.getGasPrice()) * 2;

  return price;
};

export const calculateGasMargin = (value) => {
  return value
    .mul(ethers.BigNumber.from(10000).add(ethers.BigNumber.from(1000)))
    .div(ethers.BigNumber.from(10000));
};

export const formatError = (error) => {
  if (error.data) {
    if (isValidCode(error.data.code)) {
      return MetamaskErrors[String(error.data.code)];
    } else {
      return error.data.message;
    }
  } else {
    if (error.message) {
      let message = error.message;
      let startIndex = message.indexOf('data');

      if (startIndex < 0) {
        if (isValidCode(error.code)) {
          return MetamaskErrors[String(error.code)];
        }
      }

      let code = String(message.substr(startIndex + 14, 6));

      if (isValidCode(code)) {
        return MetamaskErrors[code];
      }
    }
  }

  return 'Error!';
};

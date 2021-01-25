import { BigNumber, utils } from 'ethers';

import {
  ambs,
  chainUrls,
  defaultTokens,
  defaultTokensUrl,
  graphEndpoints,
  mediators,
  networkLabels,
  networkNames,
} from './constants';
import { getOverriddenMediator, isOverridden } from './overrides';

export const getBridgeNetwork = chainId => {
  switch (chainId) {
    case 1:
      return 74;
    case 74:
    default:
      return 1;
  }
};

export const isxDaiChain = chainId => {
  switch (chainId) {
    case 1:
      return false;
    case 74:
    default:
      return true;
  }
};

export const getDefaultToken = chainId =>
  defaultTokens[chainId] || defaultTokens[74];

export const getMediatorAddressWithOverride = (tokenAddress, chainId) => {
  if (isOverridden(tokenAddress)) {
    return getOverriddenMediator(tokenAddress, chainId);
  }
  return getMediatorAddress(chainId);
};

export const getMediatorAddress = chainId =>
  mediators[chainId].toLowerCase() || mediators[74].toLowerCase();

export const getNetworkName = chainId => networkNames[chainId] || 'Unknown';
export const getNetworkLabel = chainId => networkLabels[chainId] || 'Unknown';
export const getAMBAddress = chainId => ambs[chainId] || ambs[74];
export const getGraphEndpoint = chainId =>
  graphEndpoints[chainId] || graphEndpoints[74];
export const getRPCUrl = chainId => (chainUrls[chainId] || chainUrls[74]).rpc;
export const getExplorerUrl = chainId =>
  (chainUrls[chainId] || chainUrls[74]).explorer;
export const getTokenListUrl = chainId =>
  defaultTokensUrl[chainId] || defaultTokensUrl[74];
export const getMonitorUrl = (chainId, hash) =>
  `${(chainUrls[chainId] || chainUrls[74]).monitor}/${chainId}/${hash}`;

export const uniqueTokens = list => {
  const seen = {};
  return list.filter(token => {
    const { address } = token;
    const lowerCaseAddress = address.toLowerCase();
    const isDuplicate = Object.prototype.hasOwnProperty.call(
      seen,
      lowerCaseAddress,
    )
      ? false
      : (seen[lowerCaseAddress] = true);
    return isDuplicate;
  });
};

export const formatValue = (num, dec) => {
  const str = utils.formatUnits(num, dec);
  return Number(str).toLocaleString('en', { maximumFractionDigits: 4 });
};

export const parseValue = (num, dec) => {
  if (!num || isNaN(Number(num))) {
    return BigNumber.from(0);
  }
  return utils.parseUnits(num, dec);
};

export const uriToHttp = uri => {
  const protocol = uri.split(':')[0].toLowerCase();
  const hash = uri.match(/^ipfs:(\/\/)?(.*)$/i)?.[2];
  const name = uri.match(/^ipns:(\/\/)?(.*)$/i)?.[2];
  switch (protocol) {
    case 'https':
      return [uri];
    case 'http':
      return [`https${uri.substr(4)}`, uri];
    case 'ipfs':
      return [
        `https://cloudflare-ipfs.com/ipfs/${hash}/`,
        `https://ipfs.io/ipfs/${hash}/`,
      ];
    case 'ipns':
      return [
        `https://cloudflare-ipfs.com/ipns/${name}/`,
        `https://ipfs.io/ipns/${name}/`,
      ];
    default:
      return [];
  }
};

export const getAccountString = account => {
  const len = account.length;
  return `${account.substr(0, 6)}...${account.substr(
    len - 4,
    len - 1,
  )}`.toUpperCase();
};

export const logError = error => {
  if (process.env.REACT_APP_DEBUG_LOGS === 'true') {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

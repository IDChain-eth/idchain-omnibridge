import { BigNumber } from 'ethers';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';

export const LARGEST_UINT256 = BigNumber.from(
  '115792089237316195423570985008687907853269984665640564039457584007913129639935',
);

export const POLLING_INTERVAL =
  process.env.REACT_APP_UI_STATUS_UPDATE_INTERVAL || 1000;

export const HOME_NETWORK = 74;

export const INFURA_ID = process.env.REACT_APP_INFURA_ID;

export const networkNames = {
  1: 'ETH Mainnet',
  74: 'IDChain',
};

export const networkLabels = {
  1: 'Mainnet',
  74: 'IDChain',
};

export const chainUrls = {
  74: {
    rpc: process.env.REACT_APP_HOME_RPC_URL || 'https://idchain.one/rpc',
    explorer:
      process.env.REACT_APP_HOME_EXPLORER_PREFIX ||
      'https://explorer.idchain.one',
    monitor:
      process.env.REACT_APP_AMB_LIVE_MONITOR_PREFIX ||
      'https://alm.idchain.one',
    chainId: 74,
    name: networkNames[74],
  },
  1: {
    rpc:
      process.env.REACT_APP_FOREIGN_RPC_URL ||
      `https://mainnet.infura.io/v3/${INFURA_ID}`,
    explorer:
      process.env.REACT_APP_FOREIGN_EXPLORER_PREFIX || 'https://etherscan.io',
    monitor:
      process.env.REACT_APP_AMB_LIVE_MONITOR_PREFIX ||
      'https://alm.idchain.one',
    chainId: 1,
    name: networkNames[1],
  },
};

export const defaultTokens = {
  74: {
    address: '0x2b309226500ADc5956a422950A2AD6E6333Bb315',
    chainId: 74,
    symbol: 'WEIDI',
  },
  1: {
    address: '0x61CEAc48136d6782DBD83c09f51E23514D12470a',
    chainId: 1,
    symbol: 'Subs',
  },
};

export const graphEndpoints = {
  74: 'https://graph.idchain.one/subgraphs/name/idchain-omnibridge',
  1: 'https://api.thegraph.com/subgraphs/name/crisog/idchain-omnibridge',
};

export const mediators = {
  1:
    process.env.REACT_APP_FOREIGN_MEDIATOR_ADDRESS ||
    '0xc47192E48F75B612c792833C8b54Ad6BE319af90',
  74:
    process.env.REACT_APP_HOME_MEDIATOR_ADDRESS ||
    '0x920D59E4F79478D8A188b6736333535c765d50cd',
};

export const ambs = {
  1:
    process.env.REACT_APP_HOME_AMB_ADDRESS ||
    '0x33d136C1501709Ee020D7A8CA56D44DAcb15e227',
  74:
    process.env.REACT_APP_FOREIGN_AMB_ADDRESS ||
    '0x98e4b879f07c1BEac8592216c903fb33e828C214',
};

export const REVERSE_BRIDGE_ENABLED =
  process.env.REACT_APP_ENABLE_REVERSED_BRIDGE === 'true';

export const defaultTokensUrl = {
  74: 'https://unpkg.com/idchain-default-token-list@latest/build/uniswap-default.tokenlist.json',
  1: 'https://tokens.uniswap.org',
};

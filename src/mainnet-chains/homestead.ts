import { Chain, Token } from '../utils/types';

const homesteadTokens: Token = {
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
  },
  USDT: {
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  },
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
  BNB: {
    name: 'Binance Coin',
    symbol: 'BNB',
    address: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
  },
  BUSD: {
    name: 'Binance USD',
    symbol: 'BUSD',
    address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
  },
  MATIC: {
    name: 'Matic Network',
    symbol: 'MATIC',
    address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
  },
  DAI: {
    name: 'Dai',
    symbol: 'DAI',
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
  HEX: {
    name: 'HEX',
    symbol: 'HEX',
    address: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
  },
  SHIB: {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
  },
  WBTC: {
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  },
  UNI: {
    name: 'Uniswap',
    symbol: 'UNI',
    address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  },
  STETH: {
    name: 'Lido Staked Ether',
    symbol: 'STETH',
    address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
  },
  LEO: {
    name: 'LEO Token',
    symbol: 'LEO',
    address: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
  },
  LINK: {
    name: 'Chainlink',
    symbol: 'LINK',
    address: '0x514910771af9ca656af840dff83e8264ecf986ca',
  },
  FTT: {
    name: 'FTX Token',
    symbol: 'FTT',
    address: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
  },
  CRO: {
    name: 'Crypto.com Coin',
    symbol: 'CRO',
    address: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
  },
  QNT: {
    name: 'Quant',
    symbol: 'QNT',
    address: '0x4a220e6096b25eadb88358cb44068a3248254675',
  },
  APE: {
    name: 'ApeCoin',
    symbol: 'APE',
    address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
  },
  HT: {
    name: 'Huobi Token',
    symbol: 'HT',
    address: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
  },
  FRAX: {
    name: 'Frax',
    symbol: 'FRAX',
    address: '0x853d955acef822db058eb8505911ed77f175b99e',
  },
  XCN: {
    name: 'Chain',
    symbol: 'XCN',
    address: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
  },
  AAVE: {
    name: 'Aave',
    symbol: 'AAVE',
    address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  },
  MANA: {
    name: 'Decentraland',
    symbol: 'MANA',
    address: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
  },
  SAND: {
    name: 'The Sandbox',
    symbol: 'SAND',
    address: '0x3845badade8e6dff049820680d1f14bd3903a5d0',
  },
  CHZ: {
    name: 'Chiliz',
    symbol: 'CHZ',
    address: '0x3506424f91fd33084466f402d5d97f05f8e3b4af',
  },
  MKR: {
    name: 'Maker',
    symbol: 'MKR',
    address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  },
  TKX: {
    name: 'Tokenize Xchange',
    symbol: 'TKX',
    address: '0x667102bd3413bfeaa3dffb48fa8288819e480a88',
  },
  USDP: {
    name: 'Pax Dollar',
    symbol: 'USDP',
    address: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
  },
  OKB: {
    name: 'OKB',
    symbol: 'OKB',
    address: '0x75231f58b43240c9718dd58b4967c5114342a86c',
  },
  TUSD: {
    name: 'TrueUSD',
    symbol: 'TUSD',
    address: '0x0000000000085d4780b73119b644ae5ecd22b376',
  },
  BIT: {
    name: 'BitDAO',
    symbol: 'BIT',
    address: '0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5',
  },
  AXS: {
    name: 'Axie Infinity',
    symbol: 'AXS',
    address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
  },
  USDD: {
    name: 'Decentralized USD',
    symbol: 'USDD',
    address: '0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6',
  },
  SNX: {
    name: 'Synthetix Network Token',
    symbol: 'SNX',
    address: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
  },
  GRT: {
    name: 'The Graph',
    symbol: 'GRT',
    address: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
  },
  PAXG: {
    name: 'PAX Gold',
    symbol: 'PAXG',
    address: '0x45804880de22913dafe09f4980848ece6ecbaf78',
  },
  NEXO: {
    name: 'NEXO',
    symbol: 'NEXO',
    address: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
  },
  LDO: {
    name: 'Lido DAO',
    symbol: 'LDO',
    address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
  },
  GT: {
    name: 'Gatechain Token',
    symbol: 'GT',
    address: '0xe66747a101bff2dba3697199dcce5b743b454759',
  },
  CRV: {
    name: 'Curve DAO',
    symbol: 'CRV',
    address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
  },
  KAVA: {
    name: 'Kava.io',
    symbol: 'KAVA',
    address: '0x0c356b7fd36a5357e5a017ef11887ba100c9ab76',
  },
  ENJ: {
    name: 'Enjin Coin',
    symbol: 'ENJ',
    address: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
  },
  BAT: {
    name: 'Basic Attention',
    symbol: 'BAT',
    address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
  },
  COMP: {
    name: 'Compound',
    symbol: 'COMP',
    address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
  },
  CUSDT: {
    name: 'cUSDT',
    symbol: 'CUSDT',
    address: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9',
  },
  '1INCH': {
    name: '1inch',
    symbol: '1INCH',
    address: '0x111111111117dc0aa78b770fa6a738034120c302',
  },
  CVX: {
    name: 'Convex Finance',
    symbol: 'CVX',
    address: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
  },
  UST: {
    name: 'Wrapped UST Token',
    symbol: 'UST',
    address: '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
  },
  ENS: {
    name: 'Ethereum Name Service',
    symbol: 'ENS',
    address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
  },
  LRC: {
    name: 'Loopring',
    symbol: 'LRC',
    address: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
  },
};

const homestead: Chain = {
  homestead: homesteadTokens,
  1: homesteadTokens,
};

export default homestead;

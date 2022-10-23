import { Chain, Token } from '../utils/types';

const polygonTokens: Token = {
  WETH: {
    name: 'Wrapped Ether',
    symbol: 'WETH',
    address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  },
  USDT: {
    name: '(PoS) Tether USD',
    symbol: 'USDT',
    address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  },
  pUSDt: {
    name: 'TetherToken',
    symbol: 'pUSDt',
    address: '0x170a18b9190669cda08965562745a323c907e5ec',
  },
  BNB: {
    name: 'BNB',
    symbol: 'BNB',
    address: '0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3',
  },
  USDC: {
    name: 'USD Coin (PoS)',
    symbol: 'USDC',
    address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  },
  BUSD: {
    name: 'BUSD Token',
    symbol: 'BUSD',
    address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
  },
  MATIC: {
    name: 'Matic Token',
    symbol: 'MATIC',
    address: '0x0000000000000000000000000000000000001010',
  },
  DAI: {
    name: '(PoS) Dai Stablecoin',
    symbol: 'DAI',
    address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  },
  WBTC: {
    name: '(PoS) Wrapped BTC',
    symbol: 'WBTC',
    address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  },
  AVAX: {
    name: 'Avalanche Token',
    symbol: 'AVAX',
    address: '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
  },
  UNI: {
    name: 'Uniswap (PoS)',
    symbol: 'UNI',
    address: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
  },
  LEO: {
    name: 'Bitfinex LEO Token',
    symbol: 'LEO',
    address: '0x06d02e9d62a13fc76bb229373fb3bbbd1101d2fc',
  },
  LINK: {
    name: 'ChainLink Token',
    symbol: 'LINK',
    address: '0xb0897686c545045afc77cf20ec7a532e3120e0f1',
  },
  CRO: {
    name: 'Cronos Coin',
    symbol: 'CRO',
    address: '0xada58df0f643d959c2a47c9d4d4c1a4defe3f11c',
  },
  APE: {
    name: 'ApeCoin (PoS)',
    symbol: 'APE',
    address: '0xB7b31a6BC18e48888545CE79e83E06003bE70930',
  },
  FRAX: {
    name: 'Frax',
    symbol: 'FRAX',
    address: '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89',
  },
  AAVE: {
    name: 'Aave (PoS)',
    symbol: 'AAVE',
    address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
  },
  HT: {
    name: 'HuobiToken',
    symbol: 'HT',
    address: '0xfad65eb62a97ff5ed91b23afd039956aaca6e93b',
  },
  SAND: {
    name: 'SAND',
    symbol: 'SAND',
    address: '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
  },
  MANA: {
    name: 'Decentraland',
    symbol: 'MANA',
    address: '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4',
  },
  LDO: {
    name: 'Lido DAO Token (PoS)',
    symbol: 'LDO',
    address: '0xc3c7d422809852031b44ab29eec9f1eff2a58756',
  },
  THETA: {
    name: 'Theta Token (PoS)',
    symbol: 'THETA',
    address: '0xb46e0ae620efd98516f49bb00263317096c114b2',
  },
  CHZ: {
    name: 'chiliZ',
    symbol: 'CHZ',
    address: '0xf1938ce12400f9a761084e7a80d37e732a4da056',
  },
  MKR: {
    name: 'Maker',
    symbol: 'MKR',
    address: '0x6f7C932e7684666C9fd1d44527765433e01fF61d',
  },
  PAX: {
    name: 'Paxos Standard',
    symbol: 'PAX',
    address: '0x6f3b3286fd86d8b47ec737ceb3d0d354cc657b3e',
  },
  TUSD: {
    name: 'TrueUSD',
    symbol: 'TUSD',
    address: '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756',
  },
  USDD: {
    name: 'Decentralized USD (PoS)',
    symbol: 'USDD',
    address: '0xffa4d863c96e743a2e1513824ea006b8d0353c57',
  },
  GRT: {
    name: 'Graph Token',
    symbol: 'GRT',
    address: '0x5fe2b58c013d7601147dcdd68c143a77499f5531',
  },
  SNX: {
    name: 'Synthetix Network Token (PoS)',
    symbol: 'SNX',
    address: '0x50b728d8d964fd00c2d0aad81718b71311fef68a',
  },
  FTM: {
    name: 'Fantom Token',
    symbol: 'FTM',
    address: '0xc9c1c1c20b3658f8787cc2fd702267791f224ce1',
  },
  NEXO: {
    name: 'Nexo',
    symbol: 'NEXO',
    address: '0x41b3966b4ff7b427969ddf5da3627d6aeae9a48e',
  },
  PAXG: {
    name: 'Paxos Gold',
    symbol: 'PAXG',
    address: '0x553d3d295e0f695b9228246232edf400ed3560b5',
  },
  CRV: {
    name: 'CRV (PoS)',
    symbol: 'CRV',
    address: '0x172370d5cd63279efa6d502dab29171933a610af',
  },
  ENJ: {
    name: 'EnjinCoin',
    symbol: 'ENJ',
    address: '0x7ec26842f195c852fa843bb9f6d8b583a274a157',
  },
  BAT: {
    name: 'BAT',
    symbol: 'BAT',
    address: '0x3cef98bb43d732e2f285ee605a8158cde967d219',
  },
  RPL: {
    name: 'Rocket Pool',
    symbol: 'RPL',
    address: '0x7205705771547cf79201111b4bd8aaf29467b9ec',
  },
  FXS: {
    name: 'Frax Share',
    symbol: 'FXS',
    address: '0x1a3acf6d19267e2d3e7f898f42803e90c9219062',
  },
  CEL: {
    name: 'Celsius',
    symbol: 'CEL',
    address: '0xd85d1e945766fea5eda9103f918bd915fbca63e6',
  },
  WOO: {
    name: 'Wootrade Network',
    symbol: 'WOO',
    address: '0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603',
  },
  AMP: {
    name: 'Amp',
    symbol: 'AMP',
    address: '0x0621d647cecbfb64b79e44302c1933cb4f27054d',
  },
  '1INCH': {
    name: '1INCH Token',
    symbol: '1INCH',
    address: '0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f',
  },
  COMP: {
    name: '(PoS) Compound',
    symbol: 'COMP',
    address: '0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c',
  },
  UST: {
    name: 'Wrapped UST Token',
    symbol: 'UST',
    address: '0x692597b009d13c4049a947cab2239b7d6517875f',
  },
  HOT: {
    name: 'HoloToken',
    symbol: 'HOT',
    address: '0x0c51f415cf478f8d08c246a6c6ee180c5dc3a012',
  },
  GUSD: {
    name: 'Gemini dollar',
    symbol: 'GUSD',
    address: '0xc8a94a3d3d2dabc3c1caffffdca6a7543c3e3e65',
  },
  LRC: {
    name: 'LoopringCoin V2',
    symbol: 'LRC',
    address: '0x84e1670f61347cdaed56dcc736fb990fbb47ddc1',
  },
  GNO: {
    name: 'Gnosis',
    symbol: 'GNO',
    address: '0x5ffd62d3c3ee2e81c00a7b9079fb248e7df024a8',
  },
  POLY: {
    name: 'Polymath',
    symbol: 'POLY',
    address: '0xcb059c5573646047d6d88dddb87b745c18161d3b',
  },
};

const polygon: Chain = {
  homestead: polygonTokens,
  137: polygonTokens,
};

export default polygon;

interface Token {
  [key: string] :{
    name: string,
    symbol: string,
    address: string,
  }
}


// Token data is taken from https://etherscan.io/tokens
const homestead: Token = {
  USDT: {
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  },
  USDC: {
    name: 'USD Coin',
    symbol:'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  },
  BNB: {
    name: 'BNB',
    symbol:'BNB',
    address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
  },
  BUSD: {
    name: 'Binance USD',
    symbol:'BUSD',
    address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  },
  MATIC: {
    name: 'Matic Token',
    symbol:'MATIC',
    address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
  },
  SHIB: {
    name: 'SHIBA INU',
    symbol:'SHIB',
    address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
  },
  DAI: {
    name: 'Dai Stablecoin',
    symbol:'DAI',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  },
  stETH: {
    name: 'stETH',
    symbol:'stETH',
    address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
  },
  HEX: {
    name: 'HEX',
    symbol:'HEX',
    address: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
  },
  THETA: {
    name: 'Theta Token',
    symbol:'THETA',
    address: '0x3883f5e181fccaF8410FA61e12b59BAd963fb645',
  },
  WBTC: {
    name: 'Wrapped BTC',
    symbol:'WBTC',
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  },
  UNI: {
    name: 'Uniswap',
    symbol:'UNI',
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  },
  OKB: {
    name: 'OKB',
    symbol:'OKB',
    address: '0x75231F58b43240C9718Dd58B4967c5114342a86c',
  },
  LEO: {
    name: 'Bitfinex LEO Token',
    symbol:'LEO',
    address: '0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3',
  },
  LINK: {
    name: 'ChainLink Token',
    symbol:'LINK',
    address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  },
  CRO: {
    name: 'Cronos Coin',
    symbol:'CRO',
    address: '0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b',
  },
  QNT: {
    name: 'Quant',
    symbol:'QNT',
    address: '0x4a220E6096B25EADb88358cb44068A3248254675',
  },
  NEAR: {
    name: 'NEAR',
    symbol:'NEAR',
    address: '0x85F17Cf997934a597031b2E18a9aB6ebD4B9f6a4',
  },
  VEN: {
    name: 'VeChain',
    symbol:'VEN',
    address: '0xD850942eF8811f2A866692A623011bDE52a462C1',
  },
  XCN: {
    name: 'Chain',
    symbol:'XCN',
    address: '0xA2cd3D43c775978A96BdBf12d733D5A1ED94fb18',
  },
}

export default homestead;
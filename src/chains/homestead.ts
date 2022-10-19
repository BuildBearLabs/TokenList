import { Chain, Token } from '../types'; //import of types
// Got the data from  https://polygonscan.com/
// all tokens are exported as an object
const token: Token = {
  WETH: {
    name: ' Wrapped Ether',
    symbol: 'WETH',
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  USDT: {
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  },
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  },
  BNB: {
    name: 'BNB',
    symbol: 'BNB',
    address: '0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3',
  },
  BUSD: {
    name: 'binance-usd',
    symbol: 'BUSD',
    address: '0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7',
  },
  MATIC: {
    name: 'Matic Token',
    symbol: 'MATIC',
    address: '0x0000000000000000000000000000000000001010',
  },
  UNI: {
    name: 'Uniswap',
    symbol: 'UNI',
    address: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
  },
  WBTC: {
    name: 'Wrapped BTC',
    symbol: 'Wrapped BTC',
    address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
  },
  AVAX: {
    name: 'Avalanche Token',
    symbol: 'AVAX',
    address: '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
  },
  LINK: {
    name: 'ChainLink Token',
    symbol: 'LINK',
    address: '0xb0897686c545045aFc77CF20eC7A532E3120E0F1',
  },
};

//Homestead chain data
const homestead: Chain = {
  '1': token,
  homestead: token,
};

export default homestead;

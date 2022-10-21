interface Token {
  [key: string] :{
    name: string,
    symbol: string,
    address: string,
  }
}


const polygon: Token = {
  WMATIC:{
        name: "Wrapped Matic",
        symbol: "WMATIC",
        address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
    },
    WETH:{
      name: "Wrapped Ether",
      symbol: "WETH",
      address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  USDT :{
    name: "Tether USD",
    symbol: "USDT",
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
},
USDC :{
  name: "USD Coin (PoS)",
  symbol: "USDC ",
  address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
},
BNB:{
  name: "BNB",
  symbol: "BNB",
  address: "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3"
},
BUSD :{
  name: "binance-usd",
  symbol: "BUSD ",
  address: "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7"
},
MATIC :{
  name: "Matic Token",
  symbol: "MATIC ",
  address: "0x0000000000000000000000000000000000001010"
},
DAI :{
  name: "(PoS) Dai Stablecoin",
  symbol: "DAI",
  address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
},
WBTC :{
  name: "(PoS) Wrapped BTC",
  symbol: "WBTC ",
  address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
},
UNI :{
  name: "Uniswap (PoS)",
  symbol: "UNI",
  address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f"
},
AVAX :{
  name: "Avalanche Token",
  symbol: "AVAX ",
  address: "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b"
},
LEO :{
  name: "Bitfinex LEO Token",
  symbol: "LEO ",
  address: "0x06D02e9D62A13fC76BB229373FB3BBBD1101D2fC"
},
LINK :{
  name: "ChainLink Token",
  symbol: "LINK ",
  address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39"
},
CRO:{
  name: "Cronos Coin",
  symbol: "CRO",
  address: "0xAdA58DF0F643D959C2A47c9D4d4c1a4deFe3F11C"
},
FRAX :{
  name: "Frax",
  symbol: "FRAX ",
  address: "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89"
},
APE :{
  name: "ApeCoin (PoS)",
  symbol: "APE ",
  address: "0xB7b31a6BC18e48888545CE79e83E06003bE70930"
},
AAVE:{
  name: "Aave (PoS)",
  symbol: "AAVE",
  address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B"
},
MANA :{
  name: "Decentraland",
  symbol: "MANA ",
  address: "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4"
},
SAND:{
  name: "SAND",
  symbol: "SAND",
  address: "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683"
},
LDO :{
  name: "Lido DAO Token (PoS)",
  symbol: "LDO ",
  address: "0xC3C7d422809852031b44ab29EEC9F1EfF2A58756"
},
HT :{
  name: "HuobiToken",
  symbol: "HT ",
  address: "0xFAD65Eb62a97fF5Ed91B23aFD039956aaCa6e93b"
}
}

export default polygon;
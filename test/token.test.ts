import { tokens } from '../src';

// Get the token data by chain id or name which will give an Object like:-
//  {
//    name:"",
//    symbol:"",
//    address:""
//  }
//

describe(' Get data of token by chain id or name', () => {
  //get chain id
  it('get WMATIC token data by chain id', () => {
    expect(tokens[137].WMATIC).toMatchObject({
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    });
  });
  //by chain name
  it('get USD Coin token data by chain name', () => {
    expect(tokens.homestead.USDC).toMatchObject({
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    });
  });
});

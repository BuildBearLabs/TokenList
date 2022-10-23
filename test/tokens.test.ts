import { tokens } from '../src/index';

describe('tokens.Homestead.USDC ', () => {
  it('Can access Homestead tokens by dot accessor', () => {
    expect(tokens.homestead.USDC).toEqual({
      name: 'USD Coin ',
      symbol: 'USDC',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    });
  });
});

describe('tokens[1].USDC ', () => {
  it('Can access Homestead tokens by chainID', () => {
    expect(tokens[1].USDC).toEqual({
      name: 'USD Coin ',
      symbol: 'USDC',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    });
  });
});

describe('tokens.polygon.WMATIC ', () => {
  it('Can access Polygin tokens by dot accessor', () => {
    expect(tokens.polygon.WMATIC).toEqual({
      name: 'Wrapped Matic ',
      symbol: 'WMATIC',
      address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    });
  });
});

describe('tokens[137].WMATIC ', () => {
  it('Can access Polygin tokens by chainID', () => {
    expect(tokens[137].WMATIC).toEqual({
      name: 'Wrapped Matic ',
      symbol: 'WMATIC',
      address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    });
  });
});

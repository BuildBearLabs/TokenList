import { tokens } from '../src';

// test the token data by chain id or name like in github example

// BY CHAIN NAME
describe('Token from Ethereum Mainnet', () => {
  it('true', () => {
    const usdc = tokens.homestead.USDC;
    expect(usdc).toEqual({
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    });
  });
});

//BY CHAIN ID
describe('Token from Polygon Mainnet', () => {
  it('true', () => {
    expect(tokens[137].WMATIC).toEqual({
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    });
  });
});

//random token tests
describe('Token from homestead Mainnet', () => {
  it('true', () => {
    expect(tokens.homestead.USDT).toEqual({
      name: 'Tether USD',
      symbol: 'USDT',
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    });
  });
});
describe('Token from polyhon Mainnet', () => {
  it('true', () => {
    expect(tokens.polygon.USDC).toEqual({
      name: 'USD Coin (PoS)',
      symbol: 'USDC',
      address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    });
  });
});
describe('Token from polygon Mainnet', () => {
  it('true', () => {
    expect(tokens.polygon.SHIB).toEqual({
      name: 'SHIBA INU (PoS)',
      symbol: 'SHIB',
      address: '0x6f8a06447ff6fcf75d803135a7de15ce88c1d4ec',
    });
  });
});

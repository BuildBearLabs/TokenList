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

describe('Token from polygon Mainnet', () => {
  it('true', () => {
    expect(tokens.polygon.MATIC).toEqual({
      name: 'Polygon',
      symbol: 'MATIC',
      address: '0x0000000000000000000000000000000000001010',
    });
  });
});

describe('Token from bsc Mainnet', () => {
  it('true', () => {
    expect(tokens.bsc.USDC).toEqual({
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    });
  });
});

describe('Token from bsc Mainnet', () => {
  it('true', () => {
    expect(tokens.bsc.ADA).toEqual({
      name: 'Cardano Token',
      symbol: 'ADA',
      address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    });
  });
});

describe('Token from avalanche Mainnet', () => {
  it('true', () => {
    expect(tokens.avalanche.USDC).toEqual({
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
    });
  });
});

describe('Token from cleo Mainnet', () => {
  it('true', () => {
    expect(tokens.cleo.mCUSD).toEqual({
      name: 'Moola interest bearing CUSD',
      symbol: 'mCUSD',
      address: '0x918146359264c492bd6934071c6bd31c854edbc3',
    });
  });
});

describe('Token from ftm Mainnet', () => {
  it('true', () => {
    expect(tokens.ftm.USDC).toEqual({
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
    });
  });
});

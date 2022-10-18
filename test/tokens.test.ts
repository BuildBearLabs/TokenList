/**
 * @desc Tests the integrity of data obtained from object and the actual data
 */

import { tokens } from '../src';

/**
 * @desc Checks the data obtained from tokens[137].WMATIC value and actual value
 */
describe('Token from Polygon Mainnet', () => {
  it('works', () => {
    expect(tokens[137].WMATIC).toEqual({
      name: "Wrapped Matic",
      symbol: "WMATIC",
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
    });
  });
});


/**
 * @desc Checks the data obtained from tokens.homestead.USDC value and actual value
 */
describe('Token from Ethereum Mainnet', () => {
  it('works', () => {
    const usdc = tokens.homestead.USDC;
    expect(usdc).toEqual({
           name: "USD Coin",
           symbol: "USDC",
           address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
       });
  });
});

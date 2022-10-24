import {tokens} from "../src/index"                      //tokens object imported from index.ts in Mainnet Folder

// Get the token data by chain id or name which will give an Object like:-
// {
//     name: "USD Coin",
//     symbol: "USDC",
//     address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
// }


/**
 * HOMESTEAD TEST STARTS
 */

//  * Test for accessing Homestead ERC20 tokens by dot property accessor
describe('tokens.Homestead.USDC ', () => {
  it('is working', () => {
    expect(tokens.homestead.USDC).toMatchObject({
        name: 'USD Coin ',
        symbol: 'USDC',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      });
  });
});


//  * Test for accessing Homestead ERC20 tokens by chainID
describe('tokens[1].USDC ', () => {
  it('is working', () => {
    expect(tokens[1].USDC).toMatchObject({
        name: 'USD Coin ',
        symbol: 'USDC',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      });
  });
});

/**
 * HOMESTEAD TEST STOPS
 */


/**
 * POLYGON TEST STARTS
 */

//  * Test for accessing Polygon ERC20 tokens by dot property accessor
describe('tokens.polygon.WMATIC ', () => {
    it('is working', () => {
      expect(tokens.polygon.WMATIC).toMatchObject({
        name: 'Wrapped Matic ',
        symbol: 'WMATIC',
        address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    });
    });
  });
  
  
  //  * Test for accessing Polygon ERC20 tokens by chainID
  describe('tokens[137].WMATIC ', () => {
    it('is working', () => {
      expect(tokens[137].WMATIC).toMatchObject({
        name: 'Wrapped Matic ',
        symbol: 'WMATIC',
        address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    });
    });
  });
  
  /**
   * POLYGON TEST STOPS
   */
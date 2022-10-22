# TokenList-ERC20

### About TokenList-ERC20 Package
Get details about tokens from different Chains(Currently Polygon and Ethereum tokens available)
`Get details about token by chain name or id and token Symbol`

### Installation

Using npm:
```bash
$ npm i @harshsingh_007/tokenlist
```

### Example

```ts
    import { tokens } from "your-package";
    const usdc = tokens.homestead.USDC; // This is a JS object
    
    console.log(usdc); // should return the following
    // {
    //     name: "USD Coin",
    //     symbol: "USDC",
    //     address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    // }
    
    const wmatic = tokens[137].WMATIC; // Also chainId(s) are accepted and not just the name
    
    console.log(wmatic); // should return the following
    // {
    //     name: "Wrapped Matic",
    //     symbol: "WMATIC",
    //     address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
    // }
    
    // The format is tokens.name.symbol
    // where the name is homestead or polygon
    // Can also accept chainId
    // And the token is symbol
    
```
### License
[MIT](https://github.com/BuildBearLabs/TokenList/blob/main/LICENSE/)
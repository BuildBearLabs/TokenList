# TokenList-ERC20

Get details about tokens from different Chains

## How to use

`Get details about token by chain name or id and token Symbol`

### Install using npm

```bash
  npm install tokendetails
```
### Install using yarn

```bash 
  yarn add tokendetails
``` 

## Example

```ts
    import { tokens } from "tokendetails";
    const usdc = tokens.homestead.USDC; // This is a JS object

    console.log(usdc); //  return the following
    // {
    //     name: "USD Coin",
    //     symbol: "USDC",
    //     address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    // }

    const wmatic = tokens[137].WMATIC; // Also chainId(s) are accepted 

    console.log(wmatic); // return the following
    // {
    //     name: "Wrapped Matic",
    //     symbol: "WMATIC",
    //     address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
    // }

    // The format is tokens.name.symbol
    // where the name is homestead or polygon
    // Can also accept chainId
    // And symbol is token symbol

```

## License

[MIT](https://github.com/BuildBearLabs/TokenList/blob/main/LICENSE/)

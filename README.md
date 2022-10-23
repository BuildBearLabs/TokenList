# TokenList 

Get a list of top 50 ERC20 tokens of Homestead and Polygon Mainnet Chains.

## Installation
 
tokenlist is available on the npm registry. You can install it using the following command
 
### Install using npm 

```bash
  npm install @salik/tokenlist
```
### Install using yarn

```bash 
  yarn add @salik/tokenlist
``` 
## Usage

```ts
    import { tokens } from "@salik/tokenlist";
    const usdc = tokens.homestead.USDC; // This is a JS object

    console.log(usdc); // will return the following
    // {
    //     name: "USD Coin",
    //     symbol: "USDC",
    //     address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
    // }

    const wmatic = tokens[137].WMATIC; // Also chainId(s) are accepted 

    console.log(wmatic); // will return the following
    // {
    //     name: "Wrapped Matic",
    //     symbol: "WMATIC",
    //     address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
    // }
```

## Demo

https://user-images.githubusercontent.com/51821965/197404721-b33571cd-81fa-418a-b7a0-ee6c632e73bf.mp4

## Future Scope
- Will add more tokens and also a frontend dashboard to view all the tokens

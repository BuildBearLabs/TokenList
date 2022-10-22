# ERC20 TokenList 

Get details about ERC20 tokens from different Chains

## Installation
 
tokenlist is available on the npm registry. You can install it using the following command
 
### Install using npm 

```bash
  npm i @shreyaans/tokenlist
```
### Install using yarn

```bash 
  yarn add @shreyaans/tokenlist
``` 
## Demo
Made a small react app to quickly test out this package. Made this react app by npm installing this package only 

React app - [https://token-list-test.netlify.app/](https://token-list-test.netlify.app/)


## Usage

### Tokens object
You can use tokens object to get the name, symbol, and address of a token from available chains

```ts
import { tokens } from "@shreyaans/tokenlist";

tokens.chainName.tokenSymbol
````

#### Example

```ts
    import { tokens } from "@shreyaans/tokenlist";
    const usdc = tokens.homestead.USDC; // This is a JS object

    console.log(usdc); //  return the following
    // {
    //     name: "USD Coin",
    //     symbol: "USDC",
    //     address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
    // }

    const wmatic = tokens[137].WMATIC; // Also chainId(s) are accepted 

    console.log(wmatic); // return the following
    // {
    //     name: "Wrapped Matic",
    //     symbol: "WMATIC",
    //     address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
    // }

    // The format is tokens.name.symbol
    // where the name is homestead, polygon, bsc, avalanche, cleo and ftm
    // Can also accept chainId of chain
```

### isTokenInChain function
You can use isTokenInChain function to quickly check whether tokens object has a token in a given chain or not

```ts
import { isTokenInChain } from "@shreyaans/tokenlist";

isTokenInChain(chainName, tokenSymbol)
````

#### Example

```ts
    import { isTokenInChain } from "@shreyaans/tokenlist";
   
    console.log(isTokenInChain('homestead', 'USDC')); //  returns true

    console.log(isTokenInChain('polygon', 'ABCDE')); // returns false

    // first argument is chain name second argument is token symbol
    
```

## Supported Chains

As of now homestead, polygon, bsc, avalanche and cleo chains are supported

#### Number of tokens in each chain

Polygon: 231 tokens

Ethereum: 150 tokens

Bsc (Binance Smart Chain): 208 tokens

Avalanche: 102 tokens

Cleo: 82 tokens

Ftm (Fantom) :100




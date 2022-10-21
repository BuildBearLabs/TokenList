## ERC TokenList

ERC TokenList is an npm package consisting of list of popular token details based on the EVM Network.

## 👇 Prerequisites

- [NodeJs](https://nodejs.org/en/download/) (Works with Node LTS version v16.17.0)

## 🛠 How to Install

- Run the command `npm init` to Initialize a NPM Project.

- Run the command `npm i erctokenlist` to install the erctokenlist package to your project.

## 💻 Example usage
```ts
import { tokens } from "erctokenlist";
const usdc = tokens.homestead.USDC;

console.log(usdc); // Returns
// {
//     name: "USD Coin",
//     symbol: "USDC",
//     address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
// }

const wmatic = tokens[137].WMATIC; // Also chainId(s) are accepted and not just the name

console.log(wmatic); // Returns
// {
//     name: "Wrapped Matic",
//     symbol: "WMATIC",
//     address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
// }

```

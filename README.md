## TokenList

## Aim

- To make an npm package which would be published to `npmjs.com`.
- The entire package has to be written in typescript.
- Use the tool [tsdx](https://tsdx.io/) to get an initial setup. 
(Sample npm packages written in typescript: Link1 | Link2)
- This package would point to the erc20 Contracts in different chains.
- Example usage
    
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
    
- This package would exist to give users easy access to the tokens present in the blockchain while writing scripts.
- Network homestead and polygon required. Others optional. **Only mainnet chains required.**
- Top ten popular tokens required per network. Others optional.
- Avoid reduplication of code for each network.
- Code should be properly commented and maintainable

## Submission

- Go to `[github.com/BuildBearLabs/TokenList](https://github.com/BuildBearLabs/TokenList)`.
- Star the repo.
- Fork the repo.
- Start from that code as a base and build up the project.
- Submit a PR.

## Takeaways

- How to create a package in `npmjs.com`.
- How to write libraries in Typescript.
- Learning of good coding style and practices

## TSDX User Guide

Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

> This TSDX setup is meant for developing libraries (not apps!) that can be published to NPM. If you’re looking to build a Node app, you could use `ts-node-dev`, plain `ts-node`, or simple `tsc`.

> If you’re new to TypeScript, checkout [this handy cheatsheet](https://devhints.io/typescript)

### Commands

TSDX scaffolds your new library inside `/src`.

To run TSDX, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

#### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

#### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

##### Setup Files

This is the folder structure we set up for you:

```txt
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

#### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

#### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

### Continuous Integration

#### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

### Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

### Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

### Including Styles

There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

### Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).

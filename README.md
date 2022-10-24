# TokenList-ERC20

## About TokenList-ERC20 Package
Get details about tokens from different Chains

Currently Polygon and Ethereum tokens are available

---
### Tokens available in the chains are:
* Homestead - 945 ERC20 tokens
* Polygon - 442 ERC20 tokens
---

### Get details about token by using chain name or chain id:
* Homestead
   - Chain-name -`homestead`
   - Chain-id -`1`
* Polygon
   - Chain-name -`polygon`
   - Chain-id -`137`

---
## Installation

Using npm:
```bash
$ npm i @harshsingh_007/tokenlist

```
Using yarn:
```bash
$ yarn add @harshsingh_007/tokenlist

```
---

## Example 
### Usage

```ts
    const { tokens } = require("@harshsingh_007/tokenlist"); //importing package via require method
    
    //Syntax for accessing tokens by chainID:--

        //const variableName = tokens.chainName.token
        //Where
        // the format is tokens.chainName.symbol
        // the variableName is your variable declared
        // the chainName is homestead or polygon and
        // the token is symbol

        //Accessing homestead tokens by using chainName
        const usdc = tokens.homestead.USDC; // This is a JS object
        console.log(usdc); // should return the following
        // {
        //     name: "USD Coin",
        //     symbol: "USDC",
        //     address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        // }
    
        //Accessing polygon tokens by chainName
        const wmatic = tokens.polygon.WMATIC; // This is a JS object
        console.log(wmatic); // should return the following
        // {
        //     name: "Wrapped Matic",
        //     symbol: "WMATIC",
        //     address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
        // }


    //Syntax for accessing tokens by using chainID:--

        //const variableName = tokens.[chainID].token
        //Where
        // the format is tokens.[chainID].symbol
        // the variableName is your variable declared
        // the chainID is 1 for homestead and 137 for polygon 
        // the token is symbol

         //Accessing homestead tokens by chainID
        const usdc = tokens[1].USDC; // This is a JS object
        console.log(usdc); // should return the following
        // {
        //     name: "USD Coin",
        //     symbol: "USDC",
        //     address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        // }
    
        //Accessing polygon tokens by chainID
        const wmatic = tokens[137].WMATIC; // This is a JS object
        console.log(wmatic); // should return the following
        // {
        //     name: "Wrapped Matic",
        //     symbol: "WMATIC",
        //     address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
        // }
    
    
    
```
---

### Token Symbol Examples
* Homestead
---
    
    [
        'USDT', 'USDC',  'BNB',   'BUSD',      'MATIC', 'DAI',
        'SHIB', 'stETH', 'HEX',   'THETA',     'WBTC',  'UNI',
        'OKB',  'LEO',   'LINK',  'CRO',       'QNT',   'NEAR',
        'VEN',  'XCN',   'FRAX',  'APE',       'wMANA', 'SAND',
        'LDO',  'HT',    'cUSDC', 'MKR',       'KCS',   'CHZ',
        'USDP', 'TUSD',  'USDD',  'BTT',       'cDAI',  'GRT',
        'cETH', 'SNX',   'FTM',   'NEXO',      'PAXG',  'BIT',
        'XDCE', 'FXS',   'XAUt',  'ENJ',       'BAT',   'CEL',
        'RPL',  'ZIL',   'AMP',   'DFI',       'cUSDT', '1INCH',
        'ENS',  'HOT',   'COMP',  'GUSD',      'wCELO', 'LRC',
        'OHM',  'NXM',   'GMT',   'pSAFEMOON', 'GNO',   'WQTUM',
        'SRM',  'MCO',   'RSR',   'SUSHI',     'GLM',   'HBTC',
        'POLY', 'IOTX',  'GALA',  'YFI',       'LPT',   'BAL',
        'OMG',  'ONE',   'MIM',   'IOST',      'EURT',  'ZRX',
        'DYDX', 'WOO',   'HUSD',  'CHSB',      'SYN',   'RBN',
        'WAX',  'VVS',   'NFT',   'ZEON',      'SXP',   'MEDX',
        'UMA',  'INJ',   'CET',   'RNDR',
        ... 845 more items
    ]

* Polygon 
---
     [
            'USDT',   'pUSDt', 'USDC',  'BNB',   'BUSD',  'MATIC',
            'DAI',    'WBTC',  'UNI',   'AVAX',  'LEO',   'LINK', 
            'CRO',    'FRAX',  'APE',   'AAVE',  'MANA',  'SAND',
            'LDO',    'HT',    'THETA', 'MKR',   'CHZ',   'PAX',
            'TUSD',   'USDD',  'GRT',   'SNX',   'FTM',   'NEXO',
            'PAXG',   'CRV',   'FXS',   'ENJ',   'CEL',   'BAT',
            'RPL',    'WOO',   'AMP',   'UST',   '1INCH', 'HOT',
            'COMP',   'GUSD',  'LRC',   'GNO',   'POLY',  'SRM',
            'GLM',    'SUSHI', 'SXP',   'IOTX',  'YFI',   'LPT',
            'BAL',    'HUSD',  'OMG',   'ZRX',   'EWTB',  'CHSB',
            'SYN',    'UMA',   'INJ',   'ELON',  'RNDR',  'EURS',
            'VGX',    'OCEAN', 'PYR',   'BOBA',  'POWR',  'ORBS',
            'KNC',    'GNS',   'TEL',   'BNT',   'RLC',   'XYO',
            'renBTC', 'sUSD',  'BEPRO', 'OGN',   'KEEP',  'aETHc',
            'AGIX',   'FET',   'IQ',    'OXT',   'XSGD',  'miMATIC',
            'GHST',   'MASK',  'MFT',   'ATA',   'USDK',  'BAND',
            'LCX',    'POND',  'ORN',   'FORTH',
            ... 342 more items
     ]


## License
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

/**
 * @desc Creates homestead object with tokens in Ethereum mainnet and exports the same
 *       Data obtained from : https://etherscan.io/tokens
 */

const homestead = {
    USDT : {
        name : "Tether USD",
        symbol : "USDT",
        address : "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    USDC : {
        name : "USD Coin",
        symbol : "USDC",
        address : "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    BNB : {
        name : "BNB",
        symbol : "BNB",
        address : "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
    },
    BUSD : {
        name : "Binance USD",
        symbol : "BUSD",
        address : "0x4Fabb145d64652a948d72533023f6E7A623C7C53"
    },
    MATIC : {
        name : "Matic Token",
        symbol : "MATIC",
        address : "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
    },
    DAI : {
        name : "Dai Stablecoin",
        symbol : "DAI",
        address : "0x6B175474E89094C44Da98b954EedeAC495271d0F"
    },
    SHIB : {
        name : "SHIBA INU",
        symbol : "SHIB",
        address : "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"
    },
    stETH : {
        name : "stETH",
        symbol : "stETH",
        address : "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"
    },
    HEX : {
        name : "HEX",
        symbol : "HEX",
        address : "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"
    },
    THETA : {
        name : "Theta Token",
        symbol : "THETA",
        address : "0x3883f5e181fccaF8410FA61e12b59BAd963fb645"
    }
}

export {homestead};
//data type of token
export interface Token {
  [key: string]: {
    name: string;
    symbol: string;
    address: string;
  };
}

// Data type of tokens object
export type TokensObj = {
  [key: string]: Token;
  [key: number]: Token;
};

// Data type of chains array
export type ChainArrType = {
  name: string;
  symbol: string;
  address: string;
}[];

//data type of token
export interface Token {
  [key: string]: {
    name: string;
    symbol: string;
    address: string;
  };
}

// Data type of chain
export type Chain = {
  [key: string]: Token;
  [key: number]: Token;
};

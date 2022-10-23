// Interface for Token
export interface Token {
  [key: string]: {
    name: string;
    symbol: string;
    address: string;
  };
}

// Type Alias for Chain
export type Chain = {
  [key: string]: Token;
  [key: number]: Token;
};

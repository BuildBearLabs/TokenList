import {
  TokensObj as TokensObjType,
  Token as TokenType,
  ChainsRefArrayType,
} from './types';

import { ethereumArr } from './chains/ethereum';
import { bscArr } from './chains/bsc';
import { avalancheArr } from './chains/avalanche';
import { polygonArr } from './chains/polygon';
import { cleoArr } from './chains/cleo';
import { ftmArr } from './chains/ftm';

//stores chain name with id so that we can access tokens with both of them
let chainsRefArray: ChainsRefArrayType = [
  {
    chainName: 'homestead',
    chainArr: ethereumArr,
    chainId: 1,
  },
  {
    chainName: 'bsc',
    chainArr: bscArr,
    chainId: 56,
  },
  {
    chainName: 'avalanche',
    chainArr: avalancheArr,
    chainId: 43114,
  },
  {
    chainName: 'polygon',
    chainArr: polygonArr,
    chainId: 137,
  },
  {
    chainName: 'cleo',
    chainArr: cleoArr,
    chainId: 42220,
  },
  {
    chainName: 'ftm',
    chainArr: ftmArr,
    chainId: 250,
  },
];

class TokensObejct {
  [key: string]: TokenType;
  [key: number]: TokenType;

  constructor(chainsRefArray: ChainsRefArrayType) {
    //loops through all chains to make tokens.chain
    for (let i = 0; i < chainsRefArray.length; i++) {
      const chainObj = chainsRefArray[i];
      //chainObj will be referring to the object which contains chain's name,id and array of tokens

      this[chainObj.chainName] = {}; //this initalizes the chain object in main tokens object

      //converts chainArr to get tokens.chain.token values
      for (let j = 0; j < chainObj.chainArr.length; j++) {
        let token = chainObj.chainArr[j];
        let TokenSymbol = token.symbol;
        this[chainObj.chainName][TokenSymbol] = token;
      }

      this[chainObj.chainId] = this[chainObj.chainName]; //sets chain id so that chain id can be accessed
    }
  }
}

export const tokens: TokensObjType = new TokensObejct(chainsRefArray);

//small utility function to check whether chain contains token or not
export function isTokenInChain(chain: string, token: string) {
  if (chain in tokens) {
    if (token in tokens[chain]) {
      return true;
    }
  }
  return false;
}

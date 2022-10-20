import { ethereumArr } from './chains/ethereum';
import { bscArr } from './chains/bsc';
import { avalancheArr } from './chains/avalanche';
import { polygonArr } from './chains/polygon';
import { cleoArr } from './chains/cleo';

//stores chain name with id so that we can access with both
let chainsRefArray = [
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
];

//tokens obj constructor
function TokensObejct(this: any) {
  for (let i = 0; i < chainsRefArray.length; i++) {
    const chain = chainsRefArray[i]; //chain will be referring to the chain object which contains chain's name,id and array of tokens

    this[chain.chainName] = {}; //this initalizes the chain object in main object

    for (let j = 0; j < chain.chainArr.length; j++) {
      let token = chain.chainArr[j];
      let TokenSymbol = token.symbol;
      this[chain.chainName][TokenSymbol] = token;
    }

    this[chain.chainId] = this[chain.chainName]; //sets chain id so that chain id can be accessed
  }
}

export const tokens = new (TokensObejct as any)();

//small utility function to check whether chain contains token or not
export function isTokenInChain(chain: string, token: string) {
  if (chain in tokens) {
    if (token in tokens[chain]) {
      return true;
    }
  }
  return false;
}

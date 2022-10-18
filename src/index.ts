import { Chain } from './types';
import polygon from './chains/polygon'; // all the tokens are imported from polygon
import homestead from './chains/homestead'; //all the tokens are imported form homestead

//all the Chains  are  exported  in format of object

const tokens: Chain = { ...polygon, ...homestead };

// Export token
export { tokens };

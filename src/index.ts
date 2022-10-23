/**
 * @desc Entry point for accessing tokens of polygon and homestead mainnet chains
*/

import homestead from './mainnet-chains/homestead';
import polygon from './mainnet-chains/polygon';
import { Chain } from './utils/types';

const tokens: Chain = {
  ...homestead,
  ...polygon,
};

export { tokens };

/**
 * @desc This file makes up the entry point for accessing required token values
 *       Required objects - polygon and homestead are imported and used for mapping in tokens object.
 *       The same token object is exported for use.
 */
import { polygon } from "./mainnets/polygon";
import { homestead } from "./mainnets/homestead";

/**
 * @desc Creates a mapping with chainIds with mainnet object, also name with mainnet object
 */
const tokens = {
  137 : polygon,
  'polygon' : polygon,
  1 : homestead,
  'homestead' : homestead  
}

export {tokens};

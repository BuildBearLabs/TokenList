/**
 * This is the Entry Point for the package containing information about erc20 token for Polygon, Homestead and various upcoming future chain network Tokens
 */

import { homestead } from "./Mainnet/Homestead";    //homestead object imported from Homestead.ts in Mainnet Folder
import { polygon } from "./Mainnet/Polygon";        //polygon object imported from Polygon.ts in Mainnet Folder


// Main Object for accessing different tokens through their chainID or their name 
const tokens:any ={
    1 : homestead,
    'homestead': homestead,
    137 : polygon,
    'polygon': polygon,
}

export {tokens}
module.exports = {tokens}


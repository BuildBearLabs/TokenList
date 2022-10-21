import { isTokenInChain } from '../src';

//tests homestead and polygon to make sure it contains top tokens

let testArr = [
  // 'USDT',
  // 'USDC',
  // 'BUSD',
  // 'DAI',
  // 'MATIC',
  // 'SHIB',
  // 'UNI',
  // 'WBTC',
  // 'LEO',
  // 'LINK',
  // 'CRO',
  // 'QNT',
  // 'APE',
  // 'HT',
  // 'AAVE',
  // 'MANA',
  // 'SAND',
  // 'MKR',
  // 'TUSD',
  // 'THETA',
  // 'AXS',
  // 'KCS',
  // 'BNB',
  // 'HEX',
  // 'BAT',
  'OKB',
  'NEAR',
  'VEN',
  'XCN',
  'APE',
  'LDO'
];
function TokensBigTest() {
  let chainsArr = [ 'homestead'];
  for (let i = 0; i < chainsArr.length; i++) {
    const chain = chainsArr[i];
    for (let j = 0; j < testArr.length; j++) {
      const token = testArr[j];
      test(`${token} from ${chain} Mainnet`, () => {
        expect(isTokenInChain(chain, token)).toBe(true);
      });
    }
  }
}

TokensBigTest();

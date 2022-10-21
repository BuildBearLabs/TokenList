import { isTokenInChain } from '../src';

function BigTokensTest() {
  let testArr = [
    'BUSD',
    'DAI',
    'MATIC',
    'SHIB',
    'UNI',
    'WBTC',
    'LEO',
    'LINK',
    'CRO',
    'QNT',
    'APE',
    'HT',
    'AAVE',
    'MANA',
    'SAND',
    'MKR',
    'TUSD',
    'THETA',
    'AXS',
    'KCS',
    'USDT',
    'USDC',
    'BNB',
    'HEX',
  ];

  let chainsArr = [ 'polygon', 'homestead'];
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

BigTokensTest();

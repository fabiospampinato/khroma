
/* IMPORT */

import Color from '../color';
import Utils from '../utils';
import HSL from '../color/hsl';

/* SATURATE */

function saturate ( color: string, amount: number ): string {

  Utils.checkRange ( amount, 0, 100 );

  const hsl = HSL.rgb2hsl ( Color.parse ( color ) );

  hsl.s = Utils.clamp ( hsl.s + amount, 0, 100);
  
  return Color.output ( HSL.hsl2rgb ( hsl ) );

}

/* EXPORT */

export default saturate;

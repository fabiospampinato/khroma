
/* IMPORT */

import Color from '../color';
import Utils from '../utils';
import HSL from '../color/hsl';

/* DARKEN */

/**
 * Makes `color` darker.
 * 
 * The `amount` must be a number between 0% and 100% (inclusive). Decreases the HSL lightness of `color` by that amount.
 */
function darken ( color: string, amount: string ): string {

  Utils.checkRange ( parseFloat ( amount ), 0, 100 );

  const hsl = HSL.rgb2hsl ( Color.parse ( color ) );

  hsl.l = Utils.clamp ( hsl.l - parseFloat ( amount ), 0, 100);

  return Color.output ( HSL.hsl2rgb ( hsl.h.toString(), hsl.s.toString(), hsl.l.toString() ) );

}

/* EXPORT */

export default darken;

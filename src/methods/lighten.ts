
/* IMPORT */

import Color from '../color';
import Utils from '../utils';
import HSL from '../color/hsl';

/* LIGHTEN */

function lighten ( color: string, amount: string ): string {

  Utils.checkRange ( parseFloat ( amount ), 0, 100 );

  const hsl = HSL.rgb2hsl ( Color.parse ( color ) );

  hsl.l = Utils.clamp ( hsl.l + parseFloat ( amount ), 0, 100);

  return Color.output ( HSL.hsl2rgb ( hsl ) );

}

/* EXPORT */

export default lighten;

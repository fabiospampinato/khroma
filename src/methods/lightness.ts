
/* IMPORT */

import Color from '../color';
import HSL from '../color/hsl';
import Utils from '../utils';

/* LIGHTNESS */

function lightness ( color: string ): string {

  return `${ Utils.roundDec ( HSL.rgb2hsl ( Color.parse ( color ) ).l ) }%`;

}

/* EXPORT */

export default lightness;

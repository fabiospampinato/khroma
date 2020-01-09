
/* IMPORT */

import Color from '../color';
import HSL from '../color/hsl';
import Utils from '../utils';

/* SATURATION */

function saturation ( color: string ): string {

  return `${ Utils.roundDec ( HSL.rgb2hsl ( Color.parse ( color ) ).s ) }%`;

}

/* EXPORT */

export default saturation;

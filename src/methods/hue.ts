
/* IMPORT */

import Color from '../color';
import HSL from '../color/hsl';
import Utils from '../utils';

/* HUE */

function hue ( color: string ): string {

 return `${ Utils.roundDec ( HSL.rgb2hsl ( Color.parse ( color ) ).h ) }deg`;

}

/* EXPORT */

export default hue;

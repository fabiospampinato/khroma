
/* IMPORT */
import Color from '../color';
import HSL from '../color/hsl';

/* LIGHTNESS */

function saturation ( color: string ): string {

  return `${ HSL.rgb2hsl ( Color.parse ( color ) ).s }%`;

}

/* EXPORT */

export default saturation;
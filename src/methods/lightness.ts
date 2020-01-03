
/* IMPORT */
import Color from '../color';
import HSL from '../color/hsl';

/* LIGHTNESS */

function lightness ( color: string ): string {

  return `${ HSL.rgb2hsl ( Color.parse ( color ) ).l }%`;

}

/* EXPORT */

export default lightness;

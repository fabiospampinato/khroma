
/* IMPORT */
import Color from '../color';
import HSL from '../color/hsl';

/* HUE */

function hue ( color: string ): string {

 return `${ HSL.rgb2hsl ( Color.parse ( color ) ).h }deg`;

}

/* EXPORT */

export default hue;

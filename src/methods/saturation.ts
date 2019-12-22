
/* IMPORT */
import Color from '../color';
import Utils from "../utils";

/* LIGHTNESS */

function saturation ( color: string ): string {

  let { r, g, b } = Color.parse ( color );
  r /= 255, g /= 255, b /= 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let s: number;
  const l = (max + min) / 2;

  if (max == min) {
    s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  }

  return `${ Utils.roundDec ( Utils.frac2per ( s ), 10 ) }%`;

}

/* EXPORT */

export default saturation;
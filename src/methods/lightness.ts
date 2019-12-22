
/* IMPORT */
import Color from '../color';
import Utils from "../utils";

/* LIGHTNESS */

function lightness ( color: string ): string {

  let { r, g, b } = Color.parse ( color );
  r /= 255, g /= 255, b /= 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2

  return `${ Utils.roundDec ( Utils.frac2per ( l ), 10 ) }%`;

}

/* EXPORT */

export default lightness;

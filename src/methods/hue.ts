
/* IMPORT */
import Color from '../color';
import Utils from "../utils";

/* HUE */

function hue ( color: string ): string {

  let { r, g, b } = Color.parse ( color );
  r /= 255, g /= 255, b /= 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let hue: number;

  if (max == min) {
    hue = 0; // achromatic
  } else {
    var d = max - min;

    switch (max) {
      case r: hue = (g - b) / d + (g < b ? 6 : 0); break;
      case g: hue = (b - r) / d + 2; break;
      case b: hue = (r - g) / d + 4; break;
      default: hue = 0;
    }

    hue /= 6;
  }

 return `${ Utils.frac2deg ( hue ) }deg`;

}

/* EXPORT */

export default hue;

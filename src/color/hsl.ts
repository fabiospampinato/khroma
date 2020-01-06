/* IMPORT */

import {RGBA} from "../types";
import Abstract from "./abstract";
import Utils from "../utils";
import { HSL as _HSL } from "../types";

/* HSL */

class HSL extends Abstract {

  re = /hsla?\(\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*(?:,|\s)\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%?)\s*(?:,|\s)\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%?)(?:\s*(?:,|\/)\s*\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%?))?\s*\)/i;

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    const [ , h, s, l, a ] = match;

    const rgba = this.hsl2rgb ( { 
      h: this.hue2deg ( h ), 
      s: Utils.clamp ( parseFloat ( s ), 0, 100 ), 
      l: Utils.clamp ( parseFloat ( l ), 0, 100 )
    } );

    rgba.a = a ? Utils.clamp ( Number ( a ) || Utils.per2frac ( a ), 0, 1 ) : 1;

    return rgba

  }

  output ( rgba: RGBA ): string {

    const { h, s, l } = this.rgb2hsl ( rgba );

    if ( rgba.a < 1 ) { // HSLA

      return `hsla(${h}, ${s}, ${l}, ${rgba.a})`;

    } else { // HSL

      return `hsl(${h}, ${s}, ${l})`;

    }

  }

  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255]
   * @returns h as a degree [0, 360], s and l as a percentage [0, 100],
   * all rounded to 10 decimal places
   * 
   * Source: https://gist.github.com/mjackson/5311256
   */
  rgb2hsl( { r, g, b }: RGBA ): _HSL {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h: number = 0;
    let s: number = 0;
    const l = (max + min) / 2;

    if (max !== min) { // not achromatic
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }

      h /= 6;
    }

    return {
      h: Utils.roundDec ( Utils.frac2deg ( h ) ),
      s: Utils.roundDec ( Utils.frac2per ( s ) ),
      l: Utils.roundDec ( Utils.frac2per ( l ) )
    }
  }

  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * @returns r, g, and b as numbers [0, 255].
   *
   * Source: https://gist.github.com/mjackson/5311256
   */
  hsl2rgb ( { h, s, l }: _HSL ): RGBA {
    let r: number, g: number, b: number;
    h /= 360;
    s /= 100;
    l /= 100;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = ( p: number, q: number, t: number ) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return {
      r: Math.round ( r * 255 ),
      g: Math.round ( g * 255 ),
      b: Math.round ( b * 255 ),
      a: 1
    };

  }

  hue2deg ( hue: string ): number {

    const match = hue.match ( /(.+?)(deg|grad|rad|turn)/ );

    if ( !match ) return parseFloat ( hue );
    
    const [ , number, unit ] = match;

    const converter = {
      'deg': parseFloat,
      'grad': Utils.grad2deg,
      'rad': Utils.rad2deg,
      'turn': Utils.turn2deg
    }

    return converter [ unit ] ( number ) % 360;

  }

}

/* EXPORT */

export default new HSL();

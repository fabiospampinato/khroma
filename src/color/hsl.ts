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

    const [ r, g, b ] = this.hsl2rgb ( h, s, l );

    const formatAlpha = ( num: string | number = 1 ): number => Utils.clamp ( Number ( num ) || Utils.per2frac ( num ), 0, 1 );

    return {
      r,
      g,
      b,
      a: formatAlpha ( a )
    };
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
   * all rounded to the tenths place
   * 
   * Source: https://gist.github.com/mjackson/5311256
   */
  rgb2hsl( { r, g, b }: RGBA ): _HSL {
    r /= 255, g /= 255, b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h: number, s: number, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
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
   * Assumes h, s, and l are contained in the set [0, 1]
   * @returns r, g, and b as numbers [0, 255].
   *
   * Source: https://gist.github.com/mjackson/5311256
   */
  hsl2rgb(h: string, s: string, l: string) {
    let r: number, g: number, b: number;
    const _h: number = this.convertHue ( h );
    const _s: number = Utils.clamp ( Utils.per2frac ( s ), 0, 1 );
    const _l: number = Utils.clamp ( Utils.per2frac ( l ), 0, 1 );

    if (_s === 0) {
      r = g = b = _l; // achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }

      const q = _l < 0.5 ? _l * (1 + _s) : _l + _s - _l * _s;
      const p = 2 * _l - q;

      r = hue2rgb(p, q, _h + 1/3);
      g = hue2rgb(p, q, _h);
      b = hue2rgb(p, q, _h - 1/3);
    }

    return [ Math.round ( r * 255 ), Math.round ( g * 255 ), Math.round ( b * 255 ) ];

  }

  convertHue ( hue: string ): number {

    const match = hue.match ( /(.+?)(deg|grad|rad|turn)/ );

    if ( !match ) return Utils.deg2frac ( hue );
    
    const [ , number, unit ] = match;

    const converter = {
      'deg': Utils.deg2frac,
      'grad': Utils.grad2frac,
      'rad': Utils.rad2frac,
      'turn': Utils.turn2frac
    }

    return converter [ unit ] ( number );

  }

}

/* EXPORT */

export default new HSL();

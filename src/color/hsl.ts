/* IMPORT */

import {RGBA} from "../types";
import Abstract from "./abstract";
import Utils from "../utils";

/* HSL */

class HSL extends Abstract {

  re = /hsla?\(\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(?:deg)?)\s*(?:,|\s)\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?%?)\s*(?:,|\s)\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?%?)(?:\s*(?:,|\/)\s*\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?%?))?\s*\)/i;

  parse(color: string): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    const [ , h, s, l, a ] = match;

    const [ r, g, b ] = Utils.hslToRgb ( 
                          Utils.deg2frac ( h ), 
                          Utils.clamp ( Utils.per2frac ( s ), 0, 1 ), 
                          Utils.clamp ( Utils.per2frac ( l ), 0, 1 ) 
                        );

    const formatAlpha = ( num: string | number = 1 ): number => Utils.clamp ( Number ( num ) || Utils.per2frac ( num ), 0, 1 );

    return {
      r,
      g,
      b,
      a: formatAlpha ( a )
    };
  }

  output ( { r, g, b, a }: RGBA ): string {

    let [ h, s, l ] = Utils.rgbToHsl ( r, g, b );
    h = Utils.frac2deg ( h );
    s = Utils.frac2per ( s );
    l = Utils.frac2per ( l );

    if ( a < 1 ) { // HSLA

      return `hsla(${h}, ${s}, ${l}, ${a})`;

    } else { // HSL

      return `hsl(${h}, ${s}, ${l})`;

    }
  }
}

/* EXPORT */

export default new HSL();

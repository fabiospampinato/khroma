
/* IMPORT */

import {RGBA} from '../types';
import Utils from '../utils';
import Abstract from './abstract';

/* HEX */

class Hex extends Abstract {

  re = /#((?:[a-f0-9]{1}){3,4}|(?:[a-f0-9]{2}){3,4})$/i

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    /* 
     * Alright so the following code looks pretty weird, but allow me to explain.
     * I am doing this to avoid a nasty regex. Hex colors can be 3, 4, 6, or 8-digit.
     * It is pretty difficult to write a regex that cleanly matches all of these formats and captures the channels.
     * What I have done instead is write a regex that will match all valid formats without capturing groups.
     * Then, I use this loop to split up the hex code into the appropriate channels.
     * I know the hex code will be in one of these forms: RGB, RGBA, RRGGBB, RRGGBBAA
     */

    const hex = match[1];

    const colors: string[] = [];

    for ( let i = 0; i < hex.length; i += Math.floor ( hex.length / 3 ) ) {

      colors.push ( hex.slice ( i, i + Math.floor ( hex.length / 3 ) ) )

    }

    const [ r, g, b, a ] = colors;

    const formatColor = ( color: string ): number => Utils.hex2dec ( Utils.padStart ( color, color, 2 ) )

    const formatAlpha = ( alpha: string ): number => Utils.hex2frac ( Utils.padStart ( alpha, alpha, 2 ) );

    return {
      r: formatColor ( r ),
      g: formatColor ( g ),
      b: formatColor ( b ),
      a: formatAlpha ( a || 'ff' )
    };

  }

  output ( rgba: RGBA ): string {

    if ( rgba.a < 1 ) { // #RRGGBBAA

      return `#${Utils.dec2hex ( rgba.r )}${Utils.dec2hex ( rgba.g )}${Utils.dec2hex ( rgba.b )}${Utils.frac2hex ( rgba.a )}`;

    } else { // #RRGGBB

      return `#${Utils.dec2hex ( rgba.r )}${Utils.dec2hex ( rgba.g )}${Utils.dec2hex ( rgba.b )}`;

    }

  }

};

/* EXPORT */

export default new Hex ();

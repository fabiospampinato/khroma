
/* IMPORT */

import {RGBA} from '../types';
import Utils from '../utils';
import Abstract from './abstract';

/* HEX */

class Hex extends Abstract {

  re = /#((?:[a-f0-9]){3,4}|(?:[a-f0-9]{2}){3,4})$/i

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    /* 
     * We know the hex code will be in one of these forms: RGB, RGBA, RRGGBB, RRGGBBAA
     * The following loop splits up the hex code into the appropriate channels.
     */

    const hex = match[1];

    const increment = Math.floor ( hex.length / 3 );

    const colors: string[] = [];

    for ( let i = 0; i < hex.length; i += increment ) {

      colors.push ( hex.slice ( i, i + increment ) )

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

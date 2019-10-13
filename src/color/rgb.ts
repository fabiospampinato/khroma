
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';
import Utils from '../utils';

/* RGB */

class RGB extends Abstract {

  re = /rgba?\(\s*(-?\d+(?:\.\d+)?%?)\s*(?:,|\s)\s*(-?\d+(?:\.\d+)?%?)\s*(?:,|\s)\s*(-?\d+(?:\.\d+)?%?)(?:\s*(?:,|\s)\s*(-?\d+(?:\.\d+)?%?))?\s*\)/i; //TODO: make less gross

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    const [ , r, g, b, a ] = match as Array<string>;

    const format = ( num: string ): number => Utils.clamp ( Utils.str2dec ( num ), 0, 255 );
    
    const formatAlpha = ( num: string ): number => Utils.clamp ( Number ( Utils.str2normDec ( num ) ), 0, 1 );

    return {
      r: format ( r ) ,
      g: format ( g ) ,
      b: format ( b ) ,
      a: formatAlpha ( a || '1' )
    };

  }

  output ( rgba: RGBA ): string {

    if ( rgba.a < 1 ) { // RGBA

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

    } else { // RGB

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b})`;

    }

  }

};

/* EXPORT */

export default new RGB ();

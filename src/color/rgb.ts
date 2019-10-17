
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';
import Utils from '../utils';

/* RGB */

class RGB extends Abstract {

  re = /rgba?\(\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?%?)\s*(?:,|\s)\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?%?)\s*(?:,|\s)\s*(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?%?)(?:\s*(?:,|\/)\s*\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?%?))?\s*\)/i;
  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    const [ , r, g, b, a ] = match;

    const formatColor = ( num: string ): number => Utils.clamp ( Math.round ( Number ( num ) || Utils.per2dec ( num ) ), 0, 255 );
    
    const formatAlpha = ( num: string | number ): number => Utils.clamp ( Number ( num ) || Utils.per2frac ( num ), 0, 1 );

    return {
      r: formatColor ( r ) ,
      g: formatColor ( g ) ,
      b: formatColor ( b ) ,
      a: formatAlpha ( a || 1 )
    };

  }

  output ( rgba: RGBA ): string {

    if ( rgba.a < 1 ) { // RGBA

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

    } else { // RGB

      return `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`;

    }

  }

};

/* EXPORT */

export default new RGB ();

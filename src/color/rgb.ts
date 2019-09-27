
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';

/* RGB */

class RGB extends Abstract {

  re = /rgba\(\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?)\s*\)/i; //TODO: Support all possible formats

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    return {
      r: Number ( match[1] ),
      g: Number ( match[2] ),
      b: Number ( match[3] ),
      a: Number ( match[4] )
    };

  }

  output ( rgba: RGBA ): string {

    if ( rgba.a < 1 ) { // RGBA

      if ( rgba.a == 0 ) { // transparent
        return `transparent`;
      }

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

    } else { // RGB

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b})`;

    }

  }

};

/* EXPORT */

export default new RGB ();

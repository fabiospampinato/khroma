
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';

/* RGB */

class RGB extends Abstract {

  re = /(rgb|rgba)\(\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?),?\s*(\d+?(?:\.\d+)?)?\s*\)/i; //TODO: Support all possible formats

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    if ( !match[4] ) {

      return {
        r: Number ( match[1] ),
        g: Number ( match[2] ),
        b: Number ( match[3] ),
        a: 1
      };

    } else {

      if ( match[0] = "rgb" ) {
        console.log("WARNING: For better syntax, please use rgba when setting an alpha.");
      }

      return {
        r: Number ( match[1] ),
        g: Number ( match[2] ),
        b: Number ( match[3] ),
        a: Number ( match[4] )
      };

    }

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

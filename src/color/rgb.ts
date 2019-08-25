
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';

/* RGB */

class RGB extends Abstract {

  re = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i; //TODO: Support all possible formats

  parse ( color: string ): RGBA | undefined {

    color = color.replace(/\s/g,"");

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

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

    } else { // RGB

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b})`;

    }

  }

};

/* EXPORT */

export default new RGB ();

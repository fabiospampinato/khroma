
/* IMPORT */

import {HSLA} from '../types';
import Abstract from './abstract';

/* HSL */

class HSL extends Abstract {

  re = /(hsl|hsla)\(\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?)\s*,?(\d+?(?:\.\d+)?)?\s*\)/i; //TODO: Support all possible formats

  parse ( color: string ): HSLA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    return {
      h: Number ( match[1] ),
      s: Number ( match[2] ),
      l: Number ( match[3] ),
      a: !match[4] ? 1 : Number ( match[4] )
    };

  }

  output ( hsl: HSLA ): string {

    if ( hsl.a < 1 ) { // HSLA

      return `hsla(${hsl.h}, ${hsl.s}, ${hsl.l}, ${hsl.a})`;

    } else { // HSL

      return `hsl(${hsl.h}, ${hsl.s}, ${hsl.l})`;

    }

  }

};

/* EXPORT */

export default new HSL ();

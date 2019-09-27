
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';
import Utils from '../utils';

/* HSL */

class HSL extends Abstract {

  re = /(hsl|hsla)\(\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?),\s*(\d+?(?:\.\d+)?)\s*,?(\d+?(?:\.\d+)?)?\s*\)/i; //TODO: Support all possible formats

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    var hsl = {
      h: Number ( match[1] ),
      s: Number ( match[2] ),
      l: Number ( match[3] ),
      a: !match[4] ? 1 : Number ( match[4] )
    };

    var rgba = Utils.hsla2rgba(hsl);

    return rgba;

  }

  output ( rgba: RGBA ): string {

    var hsl = Utils.rgba2hsla(rgba);

    if ( hsl.a < 1 ) { // HSLA

      return `hsla(${hsl.h}, ${hsl.s}, ${hsl.l}, ${hsl.a})`;

    } else { // HSL

      return `hsl(${hsl.h}, ${hsl.s}, ${hsl.l})`;

    }

  }

};

/* EXPORT */

export default new HSL ();

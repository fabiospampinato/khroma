
/* IMPORT */

import {RGBA} from '../types';
import Hex from './hex';
import Keyword from './keyword';
import RGB from './rgb';
import HSL from './hsl';

/* COLOR */

const formats = [Hex, Keyword, RGB, HSL];

const Color = {

  parse ( color: string ): RGBA {

    for ( let i = 0, l = formats.length; i < l; i++ ) {

      const rgba = formats[i].parse ( color );

      if ( rgba ) return rgba;

    }

    throw new Error ( `Unsupported color format: "${color}"` );

  },

  output ( rgba: RGBA ): string { //TODO: Maybe return keyword rgba if possible

    if ( rgba.a < 1 ) { // RGB

      return RGB.output ( rgba );

    } else { // HEX

      return Hex.output ( rgba );

    }

  }

};

/* EXPORT */

export default Color;

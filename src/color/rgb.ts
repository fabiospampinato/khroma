
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';

/* RGB */

class RGB extends Abstract {

  rgbRegex = /^rgb\(\s*(\d+?(?:\.\d+)?)\s*,\s*(\d+?(?:\.\d+)?)\s*,\s*(\d+?(?:\.\d+)?)\s*\)$/i;
  rgbaRegex = /^rgba\(\s*(\d+?(?:\.\d+)?)\s*,\s*(\d+?(?:\.\d+)?)\s*,\s*(\d+?(?:\.\d+)?)\s*,\s*(\d+?(?:\.\d+)?)\s*\)$/i;

  parse ( color: string ): RGBA | undefined {

    const rgbMatched = this.rgbRegex.exec(color);
    if ( rgbMatched ) {

      return {
        r: Number ( rgbMatched[1] ),
        g: Number ( rgbMatched[2] ),
        b: Number ( rgbMatched[3] ),
        a: 1
      };

    }

    const rgbaMatched = this.rgbaRegex.exec(color);
    if ( rgbaMatched ) {

      return {
        r: Number ( rgbaMatched[1] ),
        g: Number ( rgbaMatched[2] ),
        b: Number ( rgbaMatched[3] ),
        a: Number ( rgbaMatched[4] ),
      };

    }

    return;

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

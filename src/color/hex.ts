
/* IMPORT */

import {RGBA} from '../types';
import Utils from '../utils';
import Abstract from './abstract';

/* HEX */

class Hex extends Abstract {

  re = /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/i; //TODO: Support all possible formats

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;

    return {
      r: Utils.hex2dec ( match[1] ),
      g: Utils.hex2dec ( match[2] ),
      b: Utils.hex2dec ( match[3] ),
      a: 1
    };

  }

  output ( rgba: RGBA ): string {

    if ( rgba.a < 1 ) { // #RRGGBBAA

      return `#${Utils.dec2hex ( rgba.r )}${Utils.dec2hex ( rgba.g )}${Utils.dec2hex ( rgba.b )}${Utils.per2hex ( rgba.a )}`;

    } else { // #RRGGBB

      return `#${Utils.dec2hex ( rgba.r )}${Utils.dec2hex ( rgba.g )}${Utils.dec2hex ( rgba.b )}`;

    }

  }

};

/* EXPORT */

export default new Hex ();

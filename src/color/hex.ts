
/* IMPORT */

import {RGBA} from '../types';
import Utils from '../utils';
import Abstract from './abstract';

/* HEX */

class Hex extends Abstract {

  re = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i; //TODO: Support all possible formats

  parse ( color: string ): RGBA | undefined {

    const match = color.match ( this.re );

    if ( !match ) return;
    color = Utils.convertHex2SixChars(color);

    return {
      r: Utils.hex2dec ( `${color[1]}${color[2]}` ),
      g: Utils.hex2dec ( `${color[1]}${color[2]}`),
      b: Utils.hex2dec ( `${color[1]}${color[2]}` ),
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


/* IMPORT */

import {RGBA} from '../types';
import Utils from '../utils';
import Abstract from './abstract';

/* HEX */

class Hex extends Abstract {

  re = /^#(?:([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/i;

  parse ( color: string ): RGBA | undefined {

    const match = this.re.exec(color);

    if ( !match ) return;

    const [ text , hex3 , hex4 , hex6 , hex8 ] = match;

    return {
      r: Utils.hex2dec(hex3 ? hex3[0].repeat(2) : hex4 ? hex4[0].repeat(2) : color[1]+color[2]),
      g: Utils.hex2dec(hex3 ? hex3[1].repeat(2) : hex4 ? hex4[1].repeat(2) : color[3]+color[4]),
      b: Utils.hex2dec(hex3 ? hex3[2].repeat(2) : hex4 ? hex4[2].repeat(2) : color[5]+color[6]),
      a: hex4 ? Utils.hex2per(hex4[3].repeat(2)) : hex8 ? Utils.hex2per(color[7]+color[8]) : 1
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


/* IMPORT */

import {RGBA} from '../types';
import Utils from '../utils';
import Abstract from './abstract';

/* HEX */

class Hex extends Abstract {

  re = new RegExp(/^#((?<hex3>[0-9a-f]{3})|(?<hex4>[0-9a-f]{4})|(?<hex6>[0-9a-f]{6})|(?<hex8>[0-9a-f]{8}))$/i);

  parse ( color: string ): RGBA | undefined {

    const match = this.re.exec(color);

    if ( !match ) return;

    const hex3 = match.groups.hex3;
    const hex4 = match.groups.hex4;
    const hex8 = match.groups.hex8;

    return {
      r: Utils.hex2dec(hex3 ? color[1].repeat(2) : hex4 ? color[1].repeat(2) : color[1]+color[2]),
      g: Utils.hex2dec(hex3 ? color[2].repeat(2) : hex4 ? color[2].repeat(2) : color[3]+color[4]),
      b: Utils.hex2dec(hex3 ? color[3].repeat(2) : hex4 ? color[3].repeat(2) : color[5]+color[6]),
      a: hex8 ? Utils.dec2per(Utils.hex2dec(color[7]+color[8]))/100 : hex4 ?  Utils.dec2per(Utils.hex2dec(color[4].repeat(2)))/100 : 1
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

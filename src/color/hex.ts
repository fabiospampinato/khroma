
/* IMPORT */

import {RGBA} from '../types';
import Utils from '../utils';
import Abstract from './abstract';

/* HEX */

class Hex extends Abstract {

  re = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{3})$/i; //TODO: Support all possible formats

  parse ( color: string ): RGBA | undefined {
    
    const match = color.match ( this.re );

    if ( !match ) return;

    return {
      r: Utils.hex2dec(color.length === 4 ? color[1].repeat(2) :color[1]+color[2]),
      g:  Utils.hex2dec(color.length === 4 ? color[2].repeat(2) : color[3]+color[4]),
      b:  Utils.hex2dec(color.length === 4 ? color[3].repeat(2) : color[5]+color[6]),
      a: 1 //color.length === 9 ? Utils.dec2per(Utils.hex2dec(color[7]+color[8]))
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

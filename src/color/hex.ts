
/* IMPORT */

import {RGBA} from '../types';
import Utils from '../utils';
import Abstract from './abstract';

/* HEX */

class Hex extends Abstract {

  re = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i; //TODO: Support all possible formats

  parse ( color: string ): RGBA | undefined {
    
    const match = color.match ( this.re );

    function convertHex2SixChars(color:string) {

      if(color.length === 4){

        return `#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}`;

      }

      return color;

    }

    if ( !match ) return;

    color = convertHex2SixChars(color);

    return {
      r: parseInt(color.slice(1,3), 16 ),
      g: parseInt(color.slice(3, 5), 16),
      b: parseInt(color.slice(5, 7), 16),
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

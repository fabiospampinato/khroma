
/* IMPORT */

import _ from '../utils';
import Channels from '../channels';
import {RGBA, HSLA} from '../types';

/* HEX */

const Hex = {

  /* VARIABLES */

  re: /#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,

  /* HELPERS */

  _getPartAtIndex: ( hex: string, length: number, index: number ): number => {

    let char = hex.slice ( index * length, ( index + 1 ) * length ) || 'ff';

    if ( char.length < 2 ) char = `${char}${char}`;

    return _.unit.hex2dec ( char );

  },

  /* API */

  parse: ( color: string | Channels ): Channels | void => {

    if ( _.is.channels ( color ) ) return color;

    const match = color.match ( Hex.re );

    if ( !match ) return;

    const hex = match[1],
          length = hex.length > 4 ? 2 : 1;

    const rgba = {
      r: Hex._getPartAtIndex ( hex, length, 0 ),
      g: Hex._getPartAtIndex ( hex, length, 1 ),
      b: Hex._getPartAtIndex ( hex, length, 2 ),
      a: Hex._getPartAtIndex ( hex, length, 3 ) / 255
    };

    return new Channels ( rgba );

  },

  output: ( channels: Channels | RGBA | HSLA ): string => {

    if ( !_.is.channels ( channels ) ) return Hex.output ( new Channels ( channels ) );

    if ( channels.a < 1 ) { // #RRGGBBAA

      return `#${_.unit.dec2hex ( channels.r )}${_.unit.dec2hex ( channels.g )}${_.unit.dec2hex ( channels.b )}${_.unit.frac2hex ( channels.a )}`;

    } else { // #RRGGBB

      return `#${_.unit.dec2hex ( channels.r )}${_.unit.dec2hex ( channels.g )}${_.unit.dec2hex ( channels.b )}`;

    }

  }

};

/* EXPORT */

export default Hex;

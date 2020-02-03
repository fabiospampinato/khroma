
/* IMPORT */

import _ from '../utils';
import Channels from '../channels';
import {TYPE, RGBA, HSLA} from '../types';
import Hex from './hex';
import Keyword from './keyword';
import RGB from './rgb';
import HSL from './hsl';

/* COLOR */

const formats = [Keyword, Hex, RGB, HSL]; // Sorted with performance in mind

const Color = {

  /* VARIABLES */

  format: {
    keyword: Keyword,
    hex: Hex,
    rgb: RGB,
    rgba: RGB,
    hsl: HSL,
    hsla: HSL
  },

  /* API */

  parse: ( color: string | Channels ): Channels => {

    if ( _.is.channels ( color ) ) return color;

    for ( let i = 0, l = formats.length; i < l; i++ ) {

      const channels = formats[i].parse ( color );

      if ( channels ) return channels;

    }

    throw new Error ( `Unsupported color format: "${color}"` );

  },

  output: ( channels: Channels | RGBA | HSLA ): string => {

    // SASS returns a keyword if possible, but we avoid doing that as it's slower and doesn't really add any value

    if ( !_.is.channels ( channels ) ) return Color.output ( new Channels ( channels ) );

    if ( channels.type.is ( TYPE.HSL ) || _.is.undefined ( channels.data.r ) ) {

      return HSL.output ( channels );

    } else if ( channels.a < 1 || !Number.isInteger ( channels.r ) || !Number.isInteger ( channels.g ) || !Number.isInteger ( channels.b ) ) {

      return RGB.output ( channels );

    } else {

      return Hex.output ( channels );

    }

  }

};

/* EXPORT */

export default Color;

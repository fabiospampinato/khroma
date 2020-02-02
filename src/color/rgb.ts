
/* IMPORT */

import _ from '../utils';
import {RGBA, HSLA} from '../types';
import Channels from './channels';

/* RGB */

const RGB = {

  /* VARIABLES */

  re: /rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)/i,

  /* API */

  parse: ( color: string | Channels ): Channels | void => {

    if ( _.is.channels ( color ) ) return color;

    const match = color.match ( RGB.re );

    if ( !match ) return;

    const [, r, isRedPercentage, g, isGreenPercentage, b, isBluePercentage, a, isAlphaPercentage] = match;

    const rgba = {
      r: _.channel.clamp.r ( isRedPercentage ? parseFloat ( r ) / 100 * 255 : parseFloat ( r ) ),
      g: _.channel.clamp.g ( isGreenPercentage ? parseFloat ( g ) / 100 * 255 : parseFloat ( g ) ),
      b: _.channel.clamp.b ( isBluePercentage ? parseFloat ( b ) / 100 * 255 : parseFloat ( b ) ),
      a: a ? _.channel.clamp.a ( isAlphaPercentage ? parseFloat ( a ) / 100 : parseFloat ( a ) ) : 1
    };

    return new Channels ( rgba );

  },

  output: ( channels: Channels | RGBA | HSLA ): string => {

    if ( !_.is.channels ( channels ) ) return RGB.output ( new Channels ( channels ) );

    if ( channels.a < 1 ) { // RGBA

      return `rgba(${_.lang.round ( channels.r )}, ${_.lang.round ( channels.g )}, ${_.lang.round ( channels.b )}, ${_.lang.round ( channels.a )})`;

    } else { // RGB

      return `rgb(${_.lang.round ( channels.r )}, ${_.lang.round ( channels.g )}, ${_.lang.round ( channels.b )})`;

    }

  }

};

/* EXPORT */

export default RGB;

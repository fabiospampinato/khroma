
/* IMPORT */

import _ from '../utils';
import Color from '../color';
import Channels from '../color/channels';

/* LUMINANCE */

//SOURCE: https://planetcalc.com/7779

function luminance ( color: string | Channels ): number {

  const {r, g, b} = Color.parse ( color ),
        channel2linear = ( x: number, y: number = x / 255 ) => y > .03928 ? Math.pow ( ( ( y + .055 ) / 1.055 ), 2.4 ) : y / 12.92,
        luminance = .2126 * channel2linear ( r ) + .7152 * channel2linear ( g ) + .0722 * channel2linear ( b );

  return _.lang.round ( luminance );

}

/* EXPORT */

export default luminance;

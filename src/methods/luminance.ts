
/* IMPORT */

import Color from '../color';
import Utils from '../utils';

/* LUMINANCE */

//URL: https://planetcalc.com/7779

function luminance ( color: string ): number {

  const rgba = Color.parse ( color ),
        gamma2linear = ( x, y = x / 255 ) => y > .03928 ? Math.pow ( ( ( y + .055 ) / 1.055 ), 2.4 ) : y / 12.92,
        luminance = .2126 * gamma2linear ( rgba.r ) + .7152 * gamma2linear ( rgba.g ) + .0722 * gamma2linear ( rgba.b );

  return Utils.roundDec ( luminance );

}

/* EXPORT */

export default luminance;

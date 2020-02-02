
/* IMPORT */

import Channels from '../channels';
import Color from '../color';
import rgba from './rgba';

/* MIX */

//SOURCE: https://github.com/sass/dart-sass/blob/7457d2e9e7e623d9844ffd037a070cf32d39c348/lib/src/functions/color.dart#L718-L756

function mix ( color1: string | Channels, color2: string | Channels, weight: number = 50 ): string {

  const channels1 = Color.parse ( color1 ),
        channels2 = Color.parse ( color2 ),
        weightScale = weight / 100,
        weightNormalized = ( weightScale * 2 ) - 1,
        alphaDelta = channels1.a - channels2.a,
        weight1combined = ( ( weightNormalized * alphaDelta ) === -1 ) ? weightNormalized : ( weightNormalized + alphaDelta ) / ( 1 + weightNormalized * alphaDelta ),
        weight1 = ( weight1combined + 1 ) / 2,
        weight2 = 1 - weight1,
        r = ( channels1.r * weight1 ) + ( channels2.r * weight2 ),
        g = ( channels1.g * weight1 ) + ( channels2.g * weight2 ),
        b = ( channels1.b * weight1 ) + ( channels2.b * weight2 ),
        a = ( channels1.a * weightScale ) + ( channels2.a * ( 1 - weightScale ) );

  return rgba ( r, g, b, a );

}

/* EXPORT */

export default mix;

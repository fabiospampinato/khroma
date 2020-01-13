
/* IMPORT */

import Color from '../color';
import HSL from '../color/hsl';
import Utils from '../utils';

/* HSLA */

function hsla ( h: number, s: number, l: number, a = 1 ): string {

  const hsl = {
    h,
    s: Utils.clamp ( s, 0, 100 ),
    l: Utils.clamp ( l, 0, 100 )
  };

  return Color.output ( { ...HSL.hsl2rgb ( hsl ), a } );

}

/* EXPORT */

export default hsla;

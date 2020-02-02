
/* IMPORT */

import _ from '../utils';
import Color from '../color';

/* HSLA */

function hsla ( h: number, s: number, l: number, a: number = 1 ): string {

  const hsla = _.channels.clamp ({ h, s, l, a });

  return Color.output ( hsla );

}

/* EXPORT */

export default hsla;

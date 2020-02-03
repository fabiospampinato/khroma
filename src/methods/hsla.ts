
/* IMPORT */

import _ from '../utils';
import Channels from '../channels';
import Color from '../color';

/* HSLA */

function hsla ( h: number, s: number, l: number, a: number = 1 ): string {

  const hsla = _.channels.clamp ({ h, s, l, a }),
        channels = new Channels ( hsla );

  return Color.stringify ( channels );

}

/* EXPORT */

export default hsla;

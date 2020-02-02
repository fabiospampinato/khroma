
/* IMPORT */

import Color from '../color';
import Channels from '../color/channels';
import mix from './mix';

/* INVERT */

function invert ( color: string | Channels, weight: number = 100 ): string {

  const {r, g, b, a} = Color.parse ( color ),
        inverse = new Channels ({ r: 255 - r, g: 255 - g, b: 255 - b, a });

  return mix ( inverse, color, weight );

}

/* EXPORT */

export default invert;

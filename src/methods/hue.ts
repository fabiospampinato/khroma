
/* IMPORT */

import Channels from '../color/channels';
import channel from './channel';

/* HUE */

function hue ( color: string | Channels ): number {

  return channel ( color, 'h' );

}

/* EXPORT */

export default hue;

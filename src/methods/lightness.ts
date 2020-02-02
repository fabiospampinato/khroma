
/* IMPORT */

import Channels from '../color/channels';
import channel from './channel';

/* LIGHTNESS */

function lightness ( color: string | Channels ): number {

  return channel ( color, 'l' );

}

/* EXPORT */

export default lightness;

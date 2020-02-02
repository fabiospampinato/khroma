
/* IMPORT */

import Channels from '../color/channels';
import channel from './channel';

/* RED */

function red ( color: string | Channels ): number {

  return channel ( color, 'r' );

}

/* EXPORT */

export default red;

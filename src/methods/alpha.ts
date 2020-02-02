
/* IMPORT */

import Channels from '../color/channels';
import channel from './channel';

/* ALPHA */

function alpha ( color: string | Channels ): number {

  return channel ( color, 'a' );

}

/* EXPORT */

export default alpha;


/* IMPORT */

import _ from '../utils';
import Color from '../color';
import Channels from '../color/channels';
import {CHANNELS} from '../types';

/* CHANGE */

function change ( color: string | Channels, channels: Partial<CHANNELS> ): string {

  const ch = Color.parse ( color );

  for ( const c in channels ) {

    ch[c] = _.channel.clamp[c]( channels[c] );

  }

  return Color.output ( ch );

}

/* EXPORT */

export default change;

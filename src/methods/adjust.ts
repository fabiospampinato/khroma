
/* IMPORT */

import Color from '../color';
import Channels from '../color/channels';
import {CHANNELS} from '../types';
import change from './change';

/* ADJUST */

function adjust ( color: string | Channels, channels: Partial<CHANNELS> ): string {

  const ch = Color.parse ( color ),
        changes: Partial<CHANNELS> = {};

  for ( const c in channels ) {

    changes[c] = ch[c] + channels[c];

  }

  return change ( color, changes );

}

/* EXPORT */

export default adjust;

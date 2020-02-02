
/* IMPORT */

import _ from '../utils';
import Color from '../color';
import Channels from '../color/channels';
import {CHANNEL} from '../types';

/* CHANNEL */

function channel ( color: string | Channels, channel: CHANNEL ): number {

  return _.lang.round ( Color.parse ( color )[channel] );

}

/* EXPORT */

export default channel;

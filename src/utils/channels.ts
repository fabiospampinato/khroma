
/* IMPORT */

import {RGBA, HSLA, CHANNEL, CHANNELS} from '../types';
import channel from './channel';

/* CHANNELS */

const Channels = {

  clamp: <T = RGBA | HSLA | CHANNELS> ( channels: T ): T => {

    const clamped: any = {}; //TSC

    for ( const c in channels ) {

      clamped[c] = channel.clamp[c as CHANNEL]( channels[c as CHANNEL] );

    }

    return clamped;

  }

};

/* EXPORT */

export default Channels;

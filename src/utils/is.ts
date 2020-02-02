
/* IMPORT */

import Channels from '../color/channels';

/* IS */

const Is = {

  channels: ( x: any ): x is Channels => {

    return x instanceof Channels;

  },

  number: ( x: any ): x is number => {

    return typeof x === 'number';

  },

  undefined: ( x: any ): x is undefined => {

    return x === undefined;

  }

};

/* EXPORT */

export default Is;

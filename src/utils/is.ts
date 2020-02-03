
/* IMPORT */

import Channels from '../channels';

/* IS */

const Is = {

  channels: ( x: any ): x is Channels => {

    return x instanceof Channels;

  },

  number: ( x: any ): x is number => {

    return typeof x === 'number';

  },

  string: ( x: any ): x is string => {

    return typeof x === 'string';

  },

  undefined: ( x: any ): x is undefined => {

    return x === undefined;

  }

};

/* EXPORT */

export default Is;

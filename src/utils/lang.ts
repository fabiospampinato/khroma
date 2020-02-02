
/* IMPORT */

import Config from '../config';

/* LANG */

const Lang = {

  clamp: ( number: number, lower: number, upper: number ): number => {

    return Math.min ( upper, Math.max ( lower, number ) );

  },

  round: ( number: number ): number => {

    const exp = 10 ** Config.precision;

    return Math.round ( number * exp ) / exp;

  }

};

/* EXPORT */

export default Lang;

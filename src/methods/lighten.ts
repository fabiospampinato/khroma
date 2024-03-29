
/* IMPORT */

import adjustChannel from '~/methods/adjust_channel';
import type {Channels} from '~/types';

/* MAIN */

const lighten = ( color: string | Channels, amount: number ): string => {

  return adjustChannel ( color, 'l', amount );

};

/* EXPORT */

export default lighten;

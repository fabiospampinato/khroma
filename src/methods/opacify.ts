
/* IMPORT */

import Channels from '../color/channels';
import adjust from './adjust';

/* OPACIFY */

function opacify ( color: string | Channels, amount: number ): string {

  return adjust ( color, { a: amount } );

}

/* EXPORT */

export default opacify;

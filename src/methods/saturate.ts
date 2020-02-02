
/* IMPORT */

import Channels from '../color/channels';
import adjust from './adjust';

/* SATURATE */

function saturate ( color: string | Channels, amount: number ): string {

  return adjust ( color, { s: amount } );

}

/* EXPORT */

export default saturate;

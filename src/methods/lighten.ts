
/* IMPORT */

import Channels from '../color/channels';
import adjust from './adjust';

/* LIGHTEN */

function lighten ( color: string | Channels, amount: number ): string {

  return adjust ( color, { l: amount } );

}

/* EXPORT */

export default lighten;


/* IMPORT */

import Channels from '../channels';
import adjust from './adjust';

/* DARKEN */

function darken ( color: string | Channels, amount: number ): string {

  return adjust ( color, { l: - amount } );

}

/* EXPORT */

export default darken;

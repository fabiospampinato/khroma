
/* IMPORT */

import Channels from '../color/channels';
import adjust from './adjust';

/* TRANSPARENTIZE */

function transparentize ( color: string | Channels, amount: number ): string {

  return adjust ( color, { a: - amount } );

}

/* EXPORT */

export default transparentize;

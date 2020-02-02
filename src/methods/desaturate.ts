
/* IMPORT */

import Channels from '../channels';
import adjust from './adjust';

/* DESATURATE */

function desaturate ( color: string | Channels, amount: number ): string {

  return adjust ( color, { s: - amount } );

}

/* EXPORT */

export default desaturate;

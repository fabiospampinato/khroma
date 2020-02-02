
/* IMPORT */

import Channels from '../color/channels';
import adjust from './adjust';

/* COMPLEMENT */

function complement ( color: string | Channels ): string {

  return adjust ( color, { h: 180 } );

}

/* EXPORT */

export default complement;

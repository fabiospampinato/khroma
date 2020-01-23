
/* IMPORT */

import adjust from './adjust';

/* COMPLEMENT */

function complement ( color: string ) {

  return adjust ( color, { h: 180 } );

}

/* EXPORT */

export default complement;

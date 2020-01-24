
/* IMPORT */

import change from './change';

/* GRAYSCALE */

function grayscale ( color: string ): string {

  return change ( color, { s: 0 } );

}

/* EXPORT */

export default grayscale;

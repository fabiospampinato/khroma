
/* IMPORT */

import Color from '../color';

/* RGBA */

function rgba ( r: number, g: number, b: number, a = 1 ): string {

  return Color.output ( { r, g, b, a } );

}

/* EXPORT */

export default rgba;

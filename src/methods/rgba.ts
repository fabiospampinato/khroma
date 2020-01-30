
/* IMPORT */

import Color from '../color';
import change from './change';

/* RGBA */

function rgba ( color: string, opacity: number ): string;
function rgba ( r: number, g: number, b: number, a: number ): string;
function rgba ( r: string | number, g: number, b: number = 0, a: number = 1 ): string {  //TSC: `b` shouldn't have a default value

  if ( typeof r === 'string' ) return change ( r, { a: g } );

  return Color.output ( { r, g, b, a } );

}

/* EXPORT */

export default rgba;

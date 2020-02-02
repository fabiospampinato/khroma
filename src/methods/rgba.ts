
/* IMPORT */

import _ from '../utils';
import Channels from '../channels';
import Color from '../color';
import change from './change';

/* RGBA */

function rgba ( color: string | Channels, opacity: number ): string;
function rgba ( r: number, g: number, b: number, a: number ): string;
function rgba ( r: string | Channels | number, g: number, b: number = 0, a: number = 1 ): string {  //TSC: `b` shouldn't have a default value

  if ( !_.is.number ( r ) ) return change ( r, { a: g } );

  const rgba = _.channels.clamp ({ r, g, b, a });

  return Color.output ( rgba );

}

/* EXPORT */

export default rgba;

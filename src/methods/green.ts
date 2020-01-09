
/* IMPORT */

import Color from '../color';
import Utils from '../utils';

/* GREEN */

function green ( color: string ): number {

  return Utils.roundDec ( Color.parse ( color ).g, 0 );

};

/* EXPORT */

export default green;
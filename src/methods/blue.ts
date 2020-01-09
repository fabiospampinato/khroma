
/* IMPORT */

import Color from '../color';
import Utils from '../utils';

/* BLUE */

function blue ( color: string ): number {

  return Utils.roundDec ( Color.parse ( color ).b, 0 );

};

/* EXPORT */

export default blue;
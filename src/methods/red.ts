
/* IMPORT */

import Color from '../color';
import Utils from '../utils';

/* RED */

function red ( color: string ): number {

  return Utils.roundDec ( Color.parse ( color ).r, 0 );

};

/* EXPORT */

export default red;
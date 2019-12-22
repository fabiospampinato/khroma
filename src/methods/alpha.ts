
/* IMPORT */

import Color from '../color';
import Utils from '../utils';

/* RED */

function alpha ( color: string ): number {

  return Utils.roundDec ( Color.parse ( color ).a, 10 );

};

/* EXPORT */

export default alpha;
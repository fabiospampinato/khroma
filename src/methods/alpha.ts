
/* IMPORT */

import Color from '../color';
import Utils from '../utils';

/* ALPHA */

function alpha ( color: string ): number {

  return Utils.roundDec ( Color.parse ( color ).a );

};

/* EXPORT */

export default alpha;
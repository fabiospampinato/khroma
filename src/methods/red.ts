
/* IMPORT */

import Color from '../color';

/* RED */

function red ( color: string ): number {

  return Color.parse ( color ).r;

};

/* EXPORT */

export default red;
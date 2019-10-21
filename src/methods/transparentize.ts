
/* IMPORT */

import Color from '../color';
import Utils from '../utils';

/* TRANSPARENTIZE */

function transparentize ( color: string, amount: number ): string {

  Utils.checkRange ( amount, 0, 1 );

  const rgba = Color.parse ( color );

  rgba.a = Utils.clamp ( rgba.a - amount, 0, 1 );

  return Color.output ( rgba );

}

/* EXPORT */

export default transparentize;

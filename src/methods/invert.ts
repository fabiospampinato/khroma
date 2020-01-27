
/* IMPORT */

import Color from '../color';
import Utils from '../utils';
import mix from './mix';

/* INVERT */

function invert ( color: string, weight = 100 ): string {

  Utils.checkRange ( weight, 0, 100 );

  const rgba = Color.parse ( color );

  const inverse = {
    r: 255 - rgba.r,
    g: 255 - rgba.g,
    b: 255 - rgba.b,
    a: rgba.a
  };

  return mix ( Color.output ( inverse ), color, weight );

}

/* EXPORT */

export default invert;

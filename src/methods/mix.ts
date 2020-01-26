
/* IMPORT */

import Utils from '../utils';
import Color from '../color';
import rgba from './rgba';

/* MIX */

/* 
implementation borrowed heavily from dart-sass
https://github.com/sass/dart-sass/blob/master/lib/src/functions/color.dart#L719
*/
function mix ( color1: string, color2: string, weight = 50 ): string {

  Utils.checkRange ( weight, 0, 100 );

  const weightScale = weight / 100;

  const normalizedWeight = weightScale * 2 - 1;

  const rgba1 = Color.parse ( color1 );
  const rgba2 = Color.parse ( color2 );

  const alphaDistance = rgba1.a - rgba2.a;

  const combinedWeight1 = normalizedWeight * alphaDistance == -1
      ? normalizedWeight
      : ( normalizedWeight + alphaDistance ) /
          ( 1 + normalizedWeight * alphaDistance );

  const weight1 = ( combinedWeight1 + 1 ) / 2;

  const weight2 = 1 - weight1;

  return rgba (
    rgba1.r * weight1 + rgba2.r * weight2,
    rgba1.g * weight1 + rgba2.g * weight2,
    rgba1.b * weight1 + rgba2.b * weight2,
    rgba1.a * weightScale + rgba2.a * ( 1 - weightScale )
  );

}

/* EXPORT */

export default mix;

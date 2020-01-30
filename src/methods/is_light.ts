
/* IMPORT */

import luminance from './luminance';

/* IS LIGHT */

function isLight ( color: string ): boolean {

  return luminance ( color ) >= .5;

}

/* EXPORT */

export default isLight;

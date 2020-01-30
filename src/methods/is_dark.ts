
/* IMPORT */

import isLight from './is_light';

/* IS DARK */

function isDark ( color: string ): boolean {

  return !isLight ( color );

}

/* EXPORT */

export default isDark;

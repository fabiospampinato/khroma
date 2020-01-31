
/* IMPORT */

import Hex from '../color/hex';

/* HEX */

function hex ( r: number, g: number, b: number, a: number = 1 ): string {

  return Hex.output ({ r, g, b, a });

}

/* EXPORT */

export default hex;

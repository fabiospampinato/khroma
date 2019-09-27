
/* IMPORT */

import {RGBA} from '../types';

/* ABSTRACT */

abstract class Abstract {

  abstract parse ( color: string ): RGBA | undefined;

  abstract output ( rgba: RGBA ): string | undefined;

}

/* EXPORT */

export default Abstract;

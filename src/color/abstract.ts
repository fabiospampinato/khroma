
/* IMPORT */

import {RGBA, HSLA} from '../types';

/* ABSTRACT */

abstract class Abstract {

  abstract parse ( color: string ): RGBA | HSLA | undefined;

  abstract output ( color: RGBA | HSLA ): string | undefined;

}

/* EXPORT */

export default Abstract;

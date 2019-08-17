
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';
import Hex from './hex';

/* KEYWORD */

class Keyword extends Abstract {

  colors = { //TODO: Add more colors //TODO: Make this more performant, pre-parsing colors
    black: '#000000'
  };

  parse ( color: string ): RGBA | undefined {

    color = color.toLowerCase ();

    if ( !( color in this.colors ) ) return;

    return Hex.parse ( this.colors[color] );

  }

  output ( rgba: RGBA ): string | undefined { //TODO

    return undefined;

  }

};

/* EXPORT */

export default new Keyword ();

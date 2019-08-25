
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';

/* RGB */

class RGB extends Abstract {

  reForRgba = /rgba\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*),([\d\.]+)\)/i; //TODO: Support all possible formats
  reForRgb = /rgb\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*)\s*\)/i;

  parse ( color: string ): RGBA | undefined {

    color = color.replace(/\s/g,"");

    const matchForRgba = color.match ( this.reForRgba );
    let rgba;

    if (!matchForRgba ){
      const matchForRgb = color.match ( this.reForRgb );
      if(matchForRgb){
        rgba = {
          r: Number ( matchForRgb[1] ),
          g: Number ( matchForRgb[2] ),
          b: Number ( matchForRgb[3] ),
          a: 1
        }
      }else{
        return;
      }
    }else{
      rgba = {
        r: Number ( matchForRgba[1] ),
        g: Number ( matchForRgba[2] ),
        b: Number ( matchForRgba[3] ),
        a: Number ( matchForRgba[4] ),
      }
    }
    return rgba;
  }

  output ( rgba: RGBA ): string {

    if ( rgba.a < 1 ) { // RGBA

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

    } else { // RGB

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1)`;

    }

  }

};

/* EXPORT */

export default new RGB ();

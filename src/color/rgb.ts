
/* IMPORT */

import {RGBA} from '../types';
import Abstract from './abstract';

/* RGB */

function parseItem(item: string): number | undefined {

  let num;

  if ( item.indexOf('%') != -1 ) {

    num = Math.round( parseFloat( item ) * 2.55 );

  }
  else num = parseInt(item);
  if ( num < 0 || num > 255 ) return;

  return num;

}

class RGB extends Abstract {

  parse ( color: string ): RGBA | undefined {

    let match = color.replace(/ +/g, '').match(/(rgba?)|(\d+(\.\d+)?%?)|(\.\d+)/g);
    
    let rgbaObject = {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };

    if ( match && match.length > 3 ) {

      // red
      let red = parseItem(match[1])
      if ( !red ) return;
      rgbaObject.r = red;
      // geen
      let green = parseItem(match[2])
      if ( !green ) return;
      rgbaObject.g = green;
      // blue
      let blue = parseItem(match[2])
      if ( !blue ) return;
      rgbaObject.b = blue;
      // alpha
      if ( color.indexOf('rgba') == 0 ) {

        if ( !match[4] || parseInt(match[4]) < 0 || parseInt(match[4]) > 1 ) return;
        rgbaObject.a = parseInt(match[4]);

      }
      else if ( match[4] ) return;

      return rgbaObject;

    }

    return;

  }

  output ( rgba: RGBA ): string {

    if ( rgba.a < 1 ) { // RGBA

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

    } else { // RGB

      return `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`;

    }

  }

};

/* EXPORT */

export default new RGB ();

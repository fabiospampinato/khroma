
/* IMPORT */

import {describe} from 'ava-spec';
import {lighten} from '../../dist';

/* LIGHTEN */

describe ( 'lighten', it => {

  it ( 'works', t => {

    const tests = [
      [['hsl(0, 0, 0)', 0], '#000000'],
      [['hsl(0, 0, 0)', 50], '#808080'],
      [['hsl(0, 0, 0)', 75], '#bfbfbf'],
      [['hsl(0, 0, 0)', 100], '#ffffff'],
      [['hsl(0, 0, 50)', 100], '#ffffff'],
      [['hsl(0, 0, 100)', 100], '#ffffff']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( lighten ( ...args ), output );
    });

  });

  it ( 'throws with out of range arguments', t => {

    t.throws ( () => lighten ( '#000', -10 ) );
    t.throws ( () => lighten ( '#000', 200 ) );

  });

});

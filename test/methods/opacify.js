
/* IMPORT */

import {describe} from 'ava-spec';
import {opacify} from '../../dist';

/* OPACIFY */

describe ( 'opacify', it => {

  it ( 'works', t => {

    const tests = [
      [['#000000', 1], '#000000'],
      [['rgba(0, 0, 0, 0.5)', 0.5], '#000000'],
      [['rgba(0, 0, 0, 0.5)', 0.1], 'rgba(0, 0, 0, 0.6)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( opacify ( ...args ), output );
    });

  });

  it ( 'throws with out of range arguments', t => {

    t.throws ( () => opacify ( '#000000', -1 ) );
    t.throws ( () => opacify ( '#000000', 2 ) );

  });

});

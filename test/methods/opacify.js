
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

    tests.forEach ( ([ args, result ]) => {
      t.is ( opacify ( ...args ), result );
    });

  });

  it ( 'expects an amount between 0 and 1', t => {

    t.throws ( () => opacify ( '#000000', 2 ) );
    t.throws ( () => opacify ( '#000000', -1 ) );

  });

});

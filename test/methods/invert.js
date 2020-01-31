
/* IMPORT */

import {describe} from 'ava-spec';
import {invert} from '../../dist';

/* INVERT */

describe ( 'invert', it => {

  it ( 'inverts colors', t => {

    const tests = [
      [['#b37399'], '#4c8c66'],
      [['black'], '#ffffff'],
      [['#550e0c', 20 ], '#663b3a']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( invert ( ...args ), output );
    });

  });

  it ( 'throws with out of range arguments', t => {

    const tests = [
      ['#000', -1 ],
      ['#000', 101 ]
    ];

    tests.forEach ( args => {
      t.throws ( () => invert ( ...args ) );
    });

  });

});

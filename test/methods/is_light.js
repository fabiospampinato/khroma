
/* IMPORT */

import {describe} from 'ava-spec';
import {isLight} from '../../dist';

/* IS LIGHT */

describe ( 'isLight', it => {

  it ( 'works', t => {

    const tests = [
      ['#000000', false],
      ['#8a8a8a', false],
      ['#bbbbbb', false],
      ['#ffcc00', true],
      ['#e0e0e0', true],
      ['#ffffff', true]
    ];

    tests.forEach ( ([ color, expected ]) => {
      t.is ( isLight ( color ), expected );
    });

  });

});

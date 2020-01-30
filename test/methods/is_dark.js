
/* IMPORT */

import {describe} from 'ava-spec';
import {isDark} from '../../dist';

/* IS DARK */

describe ( 'isDark', it => {

  it ( 'works', t => {

    const tests = [
      ['#000000', true],
      ['#8a8a8a', true],
      ['#bbbbbb', true],
      ['#ffcc00', false],
      ['#e0e0e0', false],
      ['#ffffff', false]
    ];

    tests.forEach ( ([ color, expected ]) => {
      t.is ( isDark ( color ), expected );
    });

  });

});

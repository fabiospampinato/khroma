
/* IMPORT */

import {describe} from 'ava-spec';
import {green} from '../../dist';

/* GREEN */

describe ( 'green', it => {

  it ( 'works', t => {

    const tests = [
      ['rgb(10, 20, 30)', 20],
      ['#102030', 32],
      ['hsl(10, 20, 30)', 66]
    ];

    tests.forEach ( ([ color, output ]) => {
      t.is ( green ( color ), output );
    });

  });

});

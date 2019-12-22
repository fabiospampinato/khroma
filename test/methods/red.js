
/* IMPORT */

import {describe} from 'ava-spec';
import {red} from '../../dist';

/* RED */

describe ( 'red', it => {

  it ( 'works', t => {

    const tests = [
      ['rgb(10, 20, 30)', 10],
      ['#102030', 16],
      ['hsl(10, 20, 30)', 92],
    ]

    tests.forEach ( ([ color, expected ]) => {
      t.is ( red ( color ), expected );
    });

  });

  it ( 'expects supported colors', t => {

    t.throws ( () => red ( 'garbage' ) );

  });
  
});
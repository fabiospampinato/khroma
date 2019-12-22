
/* IMPORT */

import {describe} from 'ava-spec';
import {green} from '../../dist';

/* RED */

describe ( 'red', it => {

  it ( 'works', t => {

    const tests = [
      ['rgb(10, 20, 30)', 20],
      ['#102030', 32],
      ['hsl(10, 20, 30)', 66],
    ]

    tests.forEach ( ([ color, expected ]) => {
      t.is ( green ( color ), expected );
    });

  });

  it ( 'expects supported colors', t => {

    t.throws ( () => green ( 'garbage' ) );

  });
  
});
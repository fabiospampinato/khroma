
/* IMPORT */

import {describe} from 'ava-spec';
import {blue} from '../../dist';

/* RED */

describe ( 'red', it => {

  it ( 'works', t => {

    const tests = [
      ['rgb(10, 20, 30)', 30],
      ['#102030', 48],
      ['hsl(10, 20, 30)', 61],
    ]

    tests.forEach ( ([ color, expected ]) => {
      t.is ( blue ( color ), expected );
    });

  });

  it ( 'expects supported colors', t => {

    t.throws ( () => blue ( 'garbage' ) );

  });
  
});
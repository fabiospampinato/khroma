
/* IMPORT */

import {describe} from 'ava-spec';
import {blue} from '../../dist';

/* BLUE */

describe ( 'blue', it => {

  it ( 'works', t => {

    const tests = [
      ['rgb(10, 20, 30)', 30],
      ['#102030', 48],
      ['hsl(10, 20, 30)', 61]
    ];

    tests.forEach ( ([ color, output ]) => {
      t.is ( blue ( color ), output );
    });

  });

});

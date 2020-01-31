
/* IMPORT */

import {describe} from 'ava-spec';
import {hue} from '../../dist';

/* HUE */

describe ( 'hue', it => {

  it ( 'works', t => {

    const tests = [
      ['hsl(10, 20, 30)', '10deg'],
      ['rgb(10, 20, 30)', '210deg'],
      ['#102030', '210deg']
    ];

    tests.forEach ( ([ color, output ]) => {
      t.is ( hue ( color ), output );
    });

  });

});

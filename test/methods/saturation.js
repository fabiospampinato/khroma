
/* IMPORT */

import {describe} from 'ava-spec';
import {saturation} from '../../dist';

/* SATURATION */

describe ( 'saturation', it => {

  it ( 'works', t => {

    const tests = [
      ['hsl(10, 20, 30)', '20%'],
      ['rgb(10, 20, 30)', '50%'],
      ['rgb(0, 0, 0)', '0%'],
      ['#102030', '50%'],
      ['#ff0000', '100%'],
    ]

    tests.forEach ( ([ color, expected ]) => {
      t.is ( saturation ( color ), expected );
    });

  });
  
});
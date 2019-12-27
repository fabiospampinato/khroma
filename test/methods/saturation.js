
/* IMPORT */

import {describe} from 'ava-spec';
import {saturation} from '../../dist';

/* SATURATION */

describe ( 'saturation', it => {

  it ( 'works', t => {

    const tests = [
      ['hsl(10, 20, 30)', '20.2614379085%'], // there is weird rounding with converting hsl <-> rgb
      ['rgb(10, 20, 30)', '50%'],
      ['rgb(0, 0, 0)', '0%'],
      ['#102030', '50%'],
      ['#dadbdf', '7.2463768116%'],
    ]

    tests.forEach ( ([ color, expected ]) => {
      t.is ( saturation ( color ), expected );
    });

  });
  
});
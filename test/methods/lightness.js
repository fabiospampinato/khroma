
/* IMPORT */

import {describe} from 'ava-spec';
import {lightness} from '../../dist';

/* LIGHTNESS */

describe ( 'lightness', it => {

  it ( 'works', t => {

    const tests = [
      ['hsl(10, 20, 30)', '30%'],
      ['rgb(10, 20, 30)', '7.8431372549%'],
      ['rgb(0, 0, 0)', '0%'],
      ['#102030', '12.5490196078%'],
    ]

    tests.forEach ( ([ color, expected ]) => {
      t.is ( lightness ( color ), expected );
    });

  });
  
});
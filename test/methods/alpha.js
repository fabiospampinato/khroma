
/* IMPORT */

import {describe} from 'ava-spec';
import {alpha} from '../../dist';

/* RED */

describe ( 'alpha', it => {

  it ( 'works', t => {

    const tests = [
      ['rgba(10, 20, 30)', 1],
      ['rgba(10, 20, 30, 0.1)', 0.1],
      ['#10203040', 0.2509803922],
      ['hsla(10, 20, 30, 0.5)', 0.5],
    ]

    tests.forEach ( ([ color, expected ]) => {
      t.is ( alpha ( color ), expected );
    });

  });

  it ( 'expects supported colors', t => {

    t.throws ( () => alpha ( 'garbage' ) );

  });
  
});
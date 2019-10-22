
/* IMPORT */

import {describe} from 'ava-spec';
import {transparentize} from '../../dist';

/* TRANSPARENTIZE */

describe ( 'transparentize', it => {

  it ( 'works', t => {

    const tests = [
      [['#000000', 1], 'rgba(0, 0, 0, 0)'],
      [['rgba(0, 0, 0, 0.5)', 0.5], 'rgba(0, 0, 0, 0)'],
      [['rgba(0, 0, 0, 0.5)', 1], 'rgba(0, 0, 0, 0)'],
      [['rgba(0, 0, 0, 0.5)', 0.1], 'rgba(0, 0, 0, 0.4)']
    ];

    tests.forEach ( ([ args, result ]) => {
      t.is ( transparentize ( ...args ), result );
    });

  });

  it ( 'expects an amount between 0 and 1', t => {

    t.throws ( () => transparentize ( '#000000', 2 ) );
    t.throws ( () => transparentize ( '#000000', -1 ) );

  });

});

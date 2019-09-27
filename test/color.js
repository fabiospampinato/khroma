
/* IMPORT */

import {describe} from 'ava-spec';
import Color from '../dist/color';
import Hex from '../dist/color/hex';

/* COLOR */

describe ( 'Color', it => {

  it ( 'expects supported colors', t => {

    const tests = [
      'foo'
    ];

    tests.forEach ( color => {
      t.throws ( () => Color.parse ( color ) );
    });

  });

  it ( 'supports keywords', t => {

    const tests = [
      ['black', '#000000'],
      ['BLACK', '#000000']
    ];

    tests.forEach ( ([ keyword, result ]) => {
      t.is ( Hex.output ( Color.parse ( keyword ) ), result );
    });

  });

  it ( 'supports transparent', t => {

    const tests = [
      ['rgba(0, 0, 0, 0)', 'transparent']
    ];

    tests.forEach ( ([ keyword, result ]) => {
      t.is ( Color.output ( Color.parse ( keyword ) ), result );
    });

  });

});

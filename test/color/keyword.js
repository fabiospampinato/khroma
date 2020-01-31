
/* IMPORT */

import {describe} from 'ava-spec';
import Color, {Hex} from '../../dist/color';

/* KEYWORD */

describe ( 'Keyword', it => {

  it ( 'parses keywords colors', t => {

    const tests = [
      ['black', '#000000'],
      ['BLACK', '#000000'],
      ['tranSpaRent', '#00000000']
    ];

    tests.forEach ( ([ input, output ]) => {
      t.is ( Hex.output ( Color.parse ( input ) ), output );
    });

  });

  it ( 'throws with unsupported colors', t => {

    const colors = [
      'foo',
      'bar'
    ];

    colors.forEach ( color => {
      t.throws ( () => Color.parse ( color ), /unsupported/i );
    });

  });

});


/* IMPORT */

import {describe} from 'ava-spec';
import {grayscale} from '../../dist';

/* GRAYSCALE */

describe ( 'grayscale', it => {

  it ( 'returns a gray color with the same lightness', t => {

    const tests = [
      [ '#6b717f', '#757575' ],
      [ '#d2e1dd', '#dadada' ],
      [ '#036', '#333333' ]
    ];

    tests.forEach ( ( [ color, result ] ) => {
      t.is ( grayscale ( color ), result );
    });

  });

});

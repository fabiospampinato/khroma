
/* IMPORT */

import {describe} from 'ava-spec';
import {complement} from '../../dist';

/* COMPLEMENT */

describe ( 'complement', it => {

  it ( 'returns the complementary color', t => {

    const tests = [
      [ '#6b717f', '#7f796b' ],
      [ '#d2e1dd', '#e1d2d6' ],
      [ '#036', '#663300' ]
    ];

    tests.forEach ( ( [ color, result ] ) => {
      t.is ( complement ( color ), result );
    });

  });

});

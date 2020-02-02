
/* IMPORT */

import {describe} from 'ava-spec';
import {mix} from '../../dist';

/* MIX */

describe ( 'mix', it => {

  it ( 'mixes two colors together', t => {

    const tests = [
      [['#036', '#d2e1dd'], '#698aa2'],
      [['#036', '#d2e1dd', 75 ], '#355f84'],
      [['#036', '#d2e1dd', 25 ], '#9eb6bf'],
      [['rgba(242, 236, 228, 0.5)', '#6b717f'], 'rgba(140.75, 143.75, 152.25, 0.75)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( mix ( ...args ), output );
    });

  });

});

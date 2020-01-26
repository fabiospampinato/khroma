
/* IMPORT */

import {describe} from 'ava-spec';
import {mix} from '../../dist';

/* MIX */

describe ( 'mix', it => {

  it ( 'mixes two colors together', t => {

    const tests = [
      [ [ '#036', '#d2e1dd' ], '#698aa2' ],
      [ [ '#036', '#d2e1dd', 75 ], '#355f84' ],
      [ [ '#036', '#d2e1dd', 25 ], '#9eb6bf' ],
      [ [ 'rgba(242, 236, 228, 0.5)', '#6b717f' ], 'rgba(141, 144, 152, 0.75)' ],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( mix ( ...args ), result );
    });

  });

  it ( 'throws an error for OOB weights', t => {

    const tests = [
      [ '#000', '#fff', -1 ],
      [ '#000', '#fff', 101 ],
    ];

    tests.forEach ( ( args ) => {
      t.throws ( () => mix ( ...args ) );
    });

  });

});

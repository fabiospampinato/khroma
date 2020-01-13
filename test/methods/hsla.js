
/* IMPORT */

import {describe} from 'ava-spec';
import {hsla} from '../../dist';

/* HSLA */

describe ( 'hsla', it => {

  it ( 'creates a color with the given channels', t => {

    const tests = [
      [ [0, 0, 0, 0], 'rgba(0, 0, 0, 0)'],
      [ [0, 0, 0, 0.5], 'rgba(0, 0, 0, 0.5)'],
      [ [0, 0, 0, 1], '#000000'],
      [ [180, 50, 50, 1], '#40bfbf'],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( hsla ( ...args ), result );
    });

  });

  it ( 'allows ommiting alpha channel', t => {

    const tests = [
      [ [0, 0, 0], '#000000'],
      [ [180, 50, 50], '#40bfbf'],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( hsla ( ...args ), result );
    });

  });

});

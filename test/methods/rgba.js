
/* IMPORT */

import {describe} from 'ava-spec';
import {rgba} from '../../dist';

/* RGBA */

describe ( 'rgba', it => {

  it ( 'creates a color with the given channels', t => {

    const tests = [
      [ [0, 0, 0, 0], 'rgba(0, 0, 0, 0)'],
      [ [255, 255, 255, 0.5], 'rgba(255, 255, 255, 0.5)'],
      [ [0, 0, 0, 1], '#000000'],
      [ [128, 128, 128, 1], '#808080'],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( rgba ( ...args ), result );
    });

  });

  it ( 'allows ommiting alpha channel', t => {

    const tests = [
      [ [0, 0, 0], '#000000'],
      [ [255, 255, 255], '#ffffff'],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( rgba ( ...args ), result );
    });

  });

});

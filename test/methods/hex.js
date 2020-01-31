
/* IMPORT */

import {describe} from 'ava-spec';
import {hex} from '../../dist';

/* HEX */

describe ( 'hex', it => {

  it ( 'creates a color with the given channels', t => {

    const tests = [
      [[0, 0, 0, 0], '#00000000'],
      [[255, 255, 255, 0.5], '#ffffff80'],
      [[0, 0, 0, 1], '#000000'],
      [[128, 128, 128, 1], '#808080']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( hex ( ...args ), output );
    });

  });

  it ( 'allows ommiting alpha channel', t => {

    const tests = [
      [[0, 0, 0], '#000000'],
      [[255, 255, 255], '#ffffff']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( hex ( ...args ), output );
    });

  });

});

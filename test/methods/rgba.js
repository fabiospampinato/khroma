
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

  it ( 'sets the opacity', t => {

    const tests = [
      [['#000000', .5], 'rgba(0, 0, 0, 0.5)'],
      [['#00000066', .5], 'rgba(0, 0, 0, 0.5)'],
      [['#ffffff', .5], 'rgba(255, 255, 255, 0.5)'],
      [['#ffffff66', .5], 'rgba(255, 255, 255, 0.5)'],
      [['#ffcc00', .5], 'rgba(255, 204, 0, 0.5)'],
      [['#ffcc0066', .5], 'rgba(255, 204, 0, 0.5)']
    ];

    tests.forEach ( ([ args, result ]) => {
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

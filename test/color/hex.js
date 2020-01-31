
/* IMPORT */

import {describe} from 'ava-spec';
import Color, {Hex} from '../../dist/color';

/* HEX */

describe ( 'Hex', it => {

  it ( 'parses hex colors', t => {

    const tests = [
      /* RGB */
      ['#000', '#000000'],
      ['#fff', '#ffffff'],
      ['#a2b', '#aa22bb'],
      ['#a2B', '#aa22bb'],
      /* RGBA */
      ['#0000', '#00000000'],
      ['#ffff', '#ffffff'],
      ['#a2b', '#aa22bb'],
      ['#a2B', '#aa22bb'],
      /* RRGGBB */
      ['#000000', '#000000'],
      ['#FFFFFF', '#ffffff'],
      ['#ffffff', '#ffffff'],
      ['#ae12b4', '#ae12b4'],
      ['#Ae12B4', '#ae12b4'],
      /* RRGGBBAA */
      ['#000000ff', '#000000'],
      ['#00000000', '#00000000'],
      ['#ffffffa8', '#ffffffa8'],
      ['#ffffffA8', '#ffffffa8']
    ];

    tests.forEach ( ([ input, output ]) => {
      t.is ( Hex.output ( Color.parse ( input ) ), output );
    });

  });

  it ( 'throws with unsupported colors', t => {

    const colors = [
      '#',
      '#0',
      '#00',
      '#ggg',
      'fff',
      '#0 0 0',
      '# 000',
      '#aabbc',
      '#aabbccd',
      '#aabbccdde'
    ];

    colors.forEach ( color => {
      t.throws ( () => Color.parse ( color ), /unsupported/i );
    });

  });

});
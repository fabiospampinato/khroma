
/* IMPORT */

import {describe} from 'ava-spec';
import {change} from '../../dist';
import Color from '../../dist/color';
import RGB from '../../dist/color/rgb';
import HSL from '../../dist/color/hsl';

/* CHANGE */

describe ( 'change', it => {

  it ( 'changes RGBA values', t => {

    const tests = [
      [ ['rgb(100, 100, 100)', { r: 0 } ], 'rgb(0, 100, 100)' ],
      [ ['rgb(100, 100, 100)', { r: 255 } ], 'rgb(255, 100, 100)' ],
      [ ['rgb(100, 100, 100)', { r: 100 } ], 'rgb(100, 100, 100)' ],
      [ ['rgb(100, 100, 100)', { g: 0 } ], 'rgb(100, 0, 100)' ],
      [ ['rgb(100, 100, 100)', { b: 0 } ], 'rgb(100, 100, 0)' ],
      [ ['rgb(100, 100, 100)', { r: 50, g: 150 } ], 'rgb(50, 150, 100)' ],
      [ ['rgb(100, 100, 100)', { r: 50, g: 150, b: 200 }], 'rgb(50, 150, 200)' ],
      [ ['rgb(100, 100, 100)', { r: 50, g: 150, b: 200, a: 0.5 }], 'rgba(50, 150, 200, 0.5)' ],
      [ ['rgb(100, 100, 100)', { r: 0, g: 0, b: 0, a: 0 }], 'rgba(0, 0, 0, 0)' ],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( RGB.output ( Color.parse ( change ( ...args ) ) ), result );
    });

  });

  it ( 'changes HSLA values', t => {

    const tests = [
      [ [ 'hsl(50, 50, 50)', { h: 100 } ], 'hsl(100, 49.8, 50)' ],
      [ [ 'hsl(50, 50, 50)', { h: 400 } ], 'hsl(40, 49.8, 50)' ],
      [ [ 'hsl(50, 50, 50)', { h: 0 } ], 'hsl(0, 49.8, 50)' ],
      [ [ 'hsl(50, 50, 50)', { s: 25 } ], 'hsl(50, 24.7, 50)' ],
      [ [ 'hsl(50, 50, 50)', { l: 25 } ], 'hsl(50, 50, 25.1)' ],
      [ [ 'hsl(50, 50, 50)', { h: 100, s: 75  } ], 'hsl(100, 74.9, 50)' ],
      [ [ 'hsl(50, 50, 50)', { h: 100, s: 75, l: 25  } ], 'hsl(100, 75, 25.1)' ],
      [ [ 'hsl(50, 50, 50)', { h: 100, s: 75, l: 25, a: 0.5  } ], 'hsla(100, 75, 25.1, 0.5)' ],
      [ [ 'hsl(50, 50, 50)', { h: 0, s: 0, l: 0, a: 0  } ], 'hsla(0, 0, 0, 0)' ],
      [ [ 'hsla(50, 50, 50, 0.5)', { h: 360, s: 100, l: 100, a: 1  } ], 'hsl(0, 0, 100)' ],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( HSL.output ( Color.parse ( change ( ...args ) ) ), result );
    });

  });

  it ( 'changes alpha', t => {

    const tests = [
      [ [ 'rgba(0, 0, 0, 0)', { a: 0.5 } ], 'rgba(0, 0, 0, 0.5)' ],
      [ [ 'hsla(0, 0, 0, 0.25)', { a: 0.5 } ], 'rgba(0, 0, 0, 0.5)' ],
      [ [ 'rgba(0, 0, 0, 1)', { a: 1 } ], '#000000' ],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( change ( ...args ), result );
    });

  });

  it ( 'throws an Error when changing RGB and HSL properties at the same time', t => {

    const tests = [
      [ '#000', { r: 0, h: 0 } ],
      [ '#000', { g: 0, l: 0 } ],
      [ '#000', { b: 0, s: 0 } ],
    ];

    tests.forEach ( ( args ) => {
      t.throws ( () => change ( ...args ), 'Cannot change an RGB property at the same time as an HSL property' );
    });

  });

  it ( 'throws an Error for out of range amounts', t => {

    const tests = [
      [ '#000', { r:  256 } ],
      [ '#000', { r: -1 } ],
      [ '#000', { g:  256 } ],
      [ '#000', { g: -1 } ],
      [ '#000', { b:  256 } ],
      [ '#000', { b: -1 } ],
      [ '#000', { l:  101 } ],
      [ '#000', { l: -1 } ],
      [ '#000', { s:  101 } ],
      [ '#000', { s: -1 } ],
      [ '#000', { a:  1.01 } ],
      [ '#000', { a: -0.01 } ],
    ];

    tests.forEach ( ( args ) => {
      t.throws ( () => adjust ( ...args ) );
    });
    
  });
  
});

/* IMPORT */

import {describe} from 'ava-spec';
import {adjust} from '../../dist';
import Color from '../../dist/color';
import RGB from '../../dist/color/rgb';
import HSL from '../../dist/color/hsl';
;

/* ADJUST */

describe ( 'adjust', it => {

  it ( 'adjusts RGB values', t => {

    const tests = [
      [ ['rgb(0, 0, 0)', { red: 100 }], 'rgb(100, 0, 0)' ],
      [ ['rgb(0, 0, 0)', { green: 100 }], 'rgb(0, 100, 0)' ],
      [ ['rgb(0, 0, 0)', { blue: 100 }], 'rgb(0, 0, 100)' ],
      [ ['rgb(0, 0, 0)', { red: 100, green: 100 }], 'rgb(100, 100, 0)' ],
      [ ['rgb(0, 0, 0)', { red: 100, green: 100, blue: 100 }], 'rgb(100, 100, 100)' ],
      [ ['rgb(255, 255, 255)', { red: -100 }], 'rgb(155, 255, 255)' ],
      [ ['rgb(255, 255, 255)', { green: -100 }], 'rgb(255, 155, 255)' ],
      [ ['rgb(255, 255, 255)', { blue: -100 }], 'rgb(255, 255, 155)' ],
      [ ['rgb(200, 0, 0)', { red: 100 }], 'rgb(255, 0, 0)' ],
      [ ['rgb(100, 0, 0)', { red: -200 }], 'rgb(0, 0, 0)' ],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( RGB.output ( Color.parse ( adjust ( ...args ) ) ), result );
    });

  });

  it ( 'adjust HSL values', t => {

    const tests = [
      [ [ 'hsl(0, 50, 50)', { hue: 100 } ], 'hsl(100, 49.8, 50)' ],
      [ [ 'hsl(0, 50, 50)', { saturation: 25 } ], 'hsl(0, 74.9, 50)' ],
      [ [ 'hsl(0, 50, 50)', { lightness: 25 } ], 'hsl(0, 50, 74.9)' ],
      [ [ 'hsl(0, 50, 50)', { hue: 100, saturation: 25  } ], 'hsl(100, 74.9, 50)' ],
      [ [ 'hsl(0, 50, 50)', { hue: 100, saturation: 25, lightness: 25  } ], 'hsl(100, 75, 74.9)' ],
      [ [ 'hsl(100, 50, 50)', { hue: -100 } ], 'hsl(0, 49.8, 50)' ],
      [ [ 'hsl(0, 50, 50)', { saturation: -25 } ], 'hsl(0, 24.7, 50)' ],
      [ [ 'hsl(0, 50, 50)', { lightness: -25 } ], 'hsl(0, 50, 25.1)' ],
      [ [ 'hsl(300, 50, 50)', { hue: 100 } ], 'hsl(40, 49.8, 50)' ],
      [ [ 'hsl(0, 50, 50)', { hue: -100 } ], 'hsl(260, 49.8, 50)' ],
      [ [ 'hsl(0, 100, 50)', { saturation: 25 } ], 'hsl(0, 100, 50)' ],
      [ [ 'hsl(0, 0, 50)', { saturation: -25 } ], 'hsl(0, 0, 50.2)' ],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( HSL.output ( Color.parse ( adjust ( ...args ) ) ), result );
    });

  });

  it ( 'adjusts alpha', t => {

    const tests = [
      [ [ 'rgba(0, 0, 0, 0)', { alpha: 0.5 } ], 'rgba(0, 0, 0, 0.5)' ],
      [ [ 'hsla(0, 0, 0, 0)', { alpha: 0.5 } ], 'rgba(0, 0, 0, 0.5)' ],
      [ [ 'rgba(0, 0, 0, 0)', { alpha: 1 } ], '#000000' ],
      [ [ 'rgba(0, 0, 0, 1)', { alpha: -0.5 } ], 'rgba(0, 0, 0, 0.5)' ],
      [ [ 'rgba(0, 0, 0, 1)', { alpha: -1 } ], 'rgba(0, 0, 0, 0)' ],
      [ [ 'rgba(0, 0, 0, 0.5)', { alpha: 1 } ], '#000000' ],
      [ [ 'rgba(0, 0, 0, 0.5)', { alpha: -1 } ], 'rgba(0, 0, 0, 0)' ],
    ];

    tests.forEach ( ( [ args, result ] ) => {
      t.is ( adjust ( ...args ), result );
    });

  });

  it ( 'throws an Error when adjusting RGB and HSL properties at the same time', t => {

    const tests = [
      [ '#000', { red: 0, hue: 0 } ],
      [ '#000', { green: 0, lightness: 0 } ],
      [ '#000', { blue: 0, saturation: 0 } ],
    ];

    tests.forEach ( ( args ) => {
      t.throws ( () => adjust ( ...args ), 'Cannot adjust an RGB property at the same time as an HSL property' );
    });

  });

  it ( 'throws an Error for out of range amounts', t => {

    const tests = [
      [ '#000', { red:  256 } ],
      [ '#000', { red: -256 } ],
      [ '#000', { green:  256 } ],
      [ '#000', { green: -256 } ],
      [ '#000', { blue:  256 } ],
      [ '#000', { blue: -256 } ],
      [ '#000', { lightness:  101 } ],
      [ '#000', { lightness: -101 } ],
      [ '#000', { saturation:  101 } ],
      [ '#000', { saturation: -101 } ],
      [ '#000', { alpha:  1.01 } ],
      [ '#000', { alpha: -1.01 } ],
    ];

    tests.forEach ( ( args ) => {
      t.throws ( () => adjust ( ...args ) );
    });
    
  });

});

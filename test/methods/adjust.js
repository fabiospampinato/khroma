
/* IMPORT */

import {describe} from 'ava-spec';
import {adjust} from '../../dist';
import Color, {RGB, HSL} from '../../dist/color';

/* ADJUST */

describe ( 'adjust', it => {

  it ( 'adjusts RGB values', t => {

    const tests = [
      [['rgb(0, 0, 0)', { r: 100 }], 'rgb(100, 0, 0)'],
      [['rgb(0, 0, 0)', { g: 100 }], 'rgb(0, 100, 0)'],
      [['rgb(0, 0, 0)', { b: 100 }], 'rgb(0, 0, 100)'],
      [['rgb(0, 0, 0)', { r: 100, g: 100 }], 'rgb(100, 100, 0)'],
      [['rgb(0, 0, 0)', { r: 100, g: 100, b: 100 }], 'rgb(100, 100, 100)'],
      [['rgb(255, 255, 255)', { r: -100 }], 'rgb(155, 255, 255)'],
      [['rgb(255, 255, 255)', { g: -100 }], 'rgb(255, 155, 255)'],
      [['rgb(255, 255, 255)', { b: -100 }], 'rgb(255, 255, 155)'],
      [['rgb(200, 0, 0)', { r: 100 }], 'rgb(255, 0, 0)'],
      [['rgb(100, 0, 0)', { r: -200 }], 'rgb(0, 0, 0)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( RGB.output ( Color.parse ( adjust ( ...args ) ) ), output );
    });

  });

  it ( 'adjust HSL values', t => {

    const tests = [
      [['hsl(0, 50, 50)', { h: 100 }], 'hsl(100, 49.8, 50)'],
      [['hsl(0, 50, 50)', { s: 25 }], 'hsl(0, 74.9, 50)'],
      [['hsl(0, 50, 50)', { l: 25 }], 'hsl(0, 50, 74.9)'],
      [['hsl(0, 50, 50)', { h: 100, s: 25  }], 'hsl(100, 74.9, 50)'],
      [['hsl(0, 50, 50)', { h: 100, s: 25, l: 25  }], 'hsl(100, 75, 74.9)'],
      [['hsl(100, 50, 50)', { h: -100 }], 'hsl(0, 49.8, 50)'],
      [['hsl(0, 50, 50)', { s: -25 }], 'hsl(0, 24.7, 50)'],
      [['hsl(0, 50, 50)', { l: -25 }], 'hsl(0, 50, 25.1)'],
      [['hsl(300, 50, 50)', { h: 100 }], 'hsl(40, 49.8, 50)'],
      [['hsl(0, 50, 50)', { h: -100 }], 'hsl(260, 49.8, 50)'],
      [['hsl(0, 100, 50)', { s: 25 }], 'hsl(0, 100, 50)'],
      [['hsl(0, 0, 50)', { s: -25 }], 'hsl(0, 0, 50.2)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( HSL.output ( Color.parse ( adjust ( ...args ) ) ), output );
    });

  });

  it ( 'adjusts alpha', t => {

    const tests = [
      [['rgba(0, 0, 0, 0)', { a: 0.5 }], 'rgba(0, 0, 0, 0.5)'],
      [['hsla(0, 0, 0, 0)', { a: 0.5 }], 'rgba(0, 0, 0, 0.5)'],
      [['rgba(0, 0, 0, 0)', { a: 1 }], '#000000'],
      [['rgba(0, 0, 0, 1)', { a: -0.5 }], 'rgba(0, 0, 0, 0.5)'],
      [['rgba(0, 0, 0, 1)', { a: -1 }], 'rgba(0, 0, 0, 0)'],
      [['rgba(0, 0, 0, 0.5)', { a: 1 }], '#000000'],
      [['rgba(0, 0, 0, 0.5)', { a: -1 }], 'rgba(0, 0, 0, 0)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( adjust ( ...args ), output );
    });

  });

  it ( 'throws an Error when adjusting RGB and HSL properties at the same time', t => {

    const tests = [
      ['#000', { r: 0, h: 0 }],
      ['#000', { g: 0, l: 0 }],
      ['#000', { b: 0, s: 0 }]
    ];

    tests.forEach ( args => {
      t.throws ( () => adjust ( ...args ), 'Cannot adjust an RGB property at the same time as an HSL property' );
    });

  });

  it ( 'throws with out of range arguments', t => {

    const tests = [
      ['#000', { r:  256 }],
      ['#000', { r: -256 }],
      ['#000', { g:  256 }],
      ['#000', { g: -256 }],
      ['#000', { b:  256 }],
      ['#000', { b: -256 }],
      ['#000', { l:  101 }],
      ['#000', { l: -101 }],
      ['#000', { s:  101 }],
      ['#000', { s: -101 }],
      ['#000', { a:  1.01 }],
      ['#000', { a: -1.01 }]
    ];

    tests.forEach ( args => {
      t.throws ( () => adjust ( ...args ) );
    });

  });

});

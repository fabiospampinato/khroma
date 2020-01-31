
/* IMPORT */

import {describe} from 'ava-spec';
import {scale} from '../../dist';
import Color, {RGB, HSL} from '../../dist/color';

/* SCALE */

describe ( 'scale', it => {

  it ( 'scales RGB components', t => {

    const tests = [
      [['rgb(0, 0, 0)', { r: 100 }], 'rgb(255, 0, 0)'],
      [['rgb(0, 0, 0)', { r: 50 }], 'rgb(128, 0, 0)'],
      [['rgb(0, 0, 0)', { r: 0 }], 'rgb(0, 0, 0)'],
      [['rgb(255, 0, 0)', { r: -100 }], 'rgb(0, 0, 0)'],
      [['rgb(255, 0, 0)', { r: -50 }], 'rgb(128, 0, 0)'],
      [['rgb(255, 0, 0)', { r: -0 }], 'rgb(255, 0, 0)'],
      [['rgb(0, 0, 0)', { g: 100 }], 'rgb(0, 255, 0)'],
      [['rgb(0, 0, 0)', { g: 50 }], 'rgb(0, 128, 0)'],
      [['rgb(0, 0, 0)', { g: 0 }], 'rgb(0, 0, 0)'],
      [['rgb(0, 0, 0)', { b: 100 }], 'rgb(0, 0, 255)'],
      [['rgb(0, 0, 0)', { b: 50 }], 'rgb(0, 0, 128)'],
      [['rgb(0, 0, 0)', { b: 0 }], 'rgb(0, 0, 0)'],
      [['rgb(0, 0, 0)', { r: 50, g: 50, b: 50 }], 'rgb(128, 128, 128)']
    ];

    tests.forEach ( ( [ args, ouptut ] ) => {
      t.is ( RGB.output ( Color.parse ( scale ( ...args ) ) ), ouptut );
    });

  });

  it ( 'scales HSL components', t => {

    const tests = [
      [['hsl(0, 50, 50)', { h: 100 }], 'hsl(0, 49.8, 50)'], // Wraps becuase 360deg = 0deg
      [['hsl(0, 50, 50)', { h: 50 }], 'hsl(180, 49.8, 50)'],
      [['hsl(0, 50, 50)', { h: 0 }], 'hsl(0, 49.8, 50)'],
      [['hsl(180, 50, 50)', { h: -100 }], 'hsl(0, 49.8, 50)'],
      [['hsl(180, 50, 50)', { h: -50 }], 'hsl(90, 49.8, 50)'],
      [['hsl(0, 50, 50)', { s: 100 }], 'hsl(0, 100, 50)'],
      [['hsl(0, 50, 50)', { s: 50 }], 'hsl(0, 74.9, 50)'],
      [['hsl(0, 50, 50)', { s: 0 }], 'hsl(0, 49.8, 50)'],
      [['hsl(0, 50, 50)', { s: -100 }], 'hsl(0, 0, 50.2)'],
      [['hsl(0, 50, 50)', { s: -50 }], 'hsl(0, 24.7, 50)'],
      [['hsl(0, 50, 50)', { l: 100 }], 'hsl(0, 0, 100)'],
      [['hsl(0, 50, 50)', { l: 50 }], 'hsl(0, 50, 74.9)'],
      [['hsl(0, 50, 50)', { l: 0 }], 'hsl(0, 49.8, 50)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( HSL.output ( Color.parse ( scale ( ...args ) ) ), output );
    });

  });

  it ( 'scales alpha', t => {

    const tests = [
      [['rgba(0, 0, 0, 0)', { a: 0 }], 'rgba(0, 0, 0, 0)'],
      [['rgba(0, 0, 0, 0)', { a: 50 }], 'rgba(0, 0, 0, 0.5)'],
      [['rgba(0, 0, 0, 0)', { a: 100 }], '#000000'],
      [['hsla(0, 0, 0, 0)', { a: 50 }], 'rgba(0, 0, 0, 0.5)'],
      [['rgba(0, 0, 0, 1)', { a: -50 }], 'rgba(0, 0, 0, 0.5)'],
      [['rgba(0, 0, 0, 1)', { a: -100 }], 'rgba(0, 0, 0, 0)'],
      [['rgba(0, 0, 0, 0.5)', { a: 100 }], '#000000'],
      [['rgba(0, 0, 0, 0.5)', { a: -100 }], 'rgba(0, 0, 0, 0)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( scale ( ...args ), output );
    });

  });

  it ( 'throws an error when scaling RGB and HSL components at the same time', t => {

    const tests = [
      ['#000', { r: 0, h: 0 }],
      ['#000', { g: 0, l: 0 }],
      ['#000', { b: 0, s: 0 }]
    ];

    tests.forEach ( args => {
      t.throws ( () => scale ( ...args ), /cannot scale/i );
    });

  });

  it ( 'throws with out of range arguments', t => {

    const tests = [
      ['#000', { r:  101 }],
      ['#000', { r: -101 }],
      ['#000', { g:  101 }],
      ['#000', { g: -101 }],
      ['#000', { b:  101 }],
      ['#000', { b: -101 }],
      ['#000', { l:  101 }],
      ['#000', { l: -101 }],
      ['#000', { s:  101 }],
      ['#000', { s: -101 }],
      ['#000', { a:  101 }],
      ['#000', { a: -101 }]
    ];

    tests.forEach ( args => {
      t.throws ( () => adjust ( ...args ) );
    });

  });

});

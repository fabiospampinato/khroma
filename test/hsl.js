import {describe} from 'ava-spec';
import HSL from '../dist/color/hsl';

describe ( 'hsl2rgb', it => {

  it ( 'works', t => {

    const tests = [
      [ { h: 360, s: 100, l: 100 }, { r: 255, g: 255, b: 255, a: 1 } ],
      [ { h: 0, s: 100, l: 100 }, { r: 255, g: 255, b: 255, a: 1 } ],
      [ { h: 0, s: 0, l: 100 }, { r: 255, g: 255, b: 255, a: 1 } ],
      [ { h: 0, s: 0, l: 0 }, { r: 0, g: 0, b: 0, a: 1 } ],
      [ { h: 0, s: 0, l: 50 }, { r: 127.5, g: 127.5, b: 127.5, a: 1 }],
      [ { h: 180, s: 50, l: 50 }, { r: 63.75, g: 191.24999999999997, b: 191.25, a: 1 }],
      [ { h: 10, s: 20, l: 30 }, { r: 91.8, g: 66.3, b: 61.199999999999996, a: 1 }],
      [ { h: 0, s: 50, l: 50 }, { r: 191.25, g: 63.75, b: 63.75, a: 1 }],
    ];

    tests.forEach ( ([ color, expected ]) => {
      t.deepEqual ( HSL.hsl2rgb ( color ), expected );
    });

  });

});

describe ( 'rgb2hsl', it => {

  it ( 'works', t => {

    const tests = [
      [ { r: 255, g: 255, b: 255, a: 1 }, { h: 0, s: 0, l: 100 } ],
      [ { r: 0, g: 0, b: 0, a: 1 }, { h: 0, s: 0, l: 0 } ],
      [ { r: 127.5, g: 127.5, b: 127.5, a: 1 }, { h: 0, s: 0, l: 50 } ],
      [ { r: 63.75, g: 191.24999999999997, b: 191.25, a: 1 }, { h: 180, s: 50, l: 50 } ],
      [ { r: 91.8, g: 66.3, b: 61.199999999999996, a: 1 }, { h: 10.000000000000009, s: 20, l: 30 } ],
      [ { r: 191.25, g: 63.75, b: 63.75, a: 1 }, { h: 0, s: 50, l: 50 } ],
    ];

    tests.forEach ( ([ color, expected ]) => {
      t.deepEqual ( HSL.rgb2hsl ( color ), expected );
    });

  });

});

describe ( 'hue2deg', it => {

  it ( 'works', t => {

    const tests = [
      ['10', 10],
      ['10deg', 10],
    ];

    tests.forEach ( ([ hue, expected ]) => {
      t.is ( HSL.hue2deg ( hue ), expected );
    });

  });

});

/* IMPORT */

import {describe} from 'ava-spec';
import Color from '../dist/color';
import Hex from '../dist/color/hex';
import RGB from '../dist/color/rgb';
import HSL from '../dist/color/hsl';

/* COLOR */

describe ( 'Color', it => {

  it ( 'expects supported colors', t => {

    const tests = [
      'foo',
      /* RGB */
      'rgb()',
      'rgb(1, 2, 3, 4, 5)',
      'rgb(1/2/3)',
      'rgb(1,, 20, 255)',
      'rgb(1%,, 20%, 255%)',
      'rgb(1%, 255%)',
      'rgb(1%, 10%%, 255%)',
      'rgb(1%, %10%, 255%)',
      'rgb(1)',
      'rgb(1, 20, 255',
      'rgb 1, 20, 255',
      'rgb 1, 20, 255)',
      'rgb(1, a, 255)',
      'rgb (1, 2, 255)',
      'rgb(1,2,3..5)',
      'rgb(1, 2, 3.4.5)',
      'rgbQ(1, 2, 255)',
      'r g b(1, 2, 255)',
      /* RGBA */
      'rgba()',
      'rgba(51 170 51 0.4)',
      'rgba(1, 2, 3, 4, 5)',
      'rgba(0, 0, 0, 0..5)',
      'rgba(0, 0, 0, 0.5.)',
      'rgba(0, 0, 0, 0%%)',
      'rgba(51 170 51 // 0.4)',
      'rgba(1ee2, .5e1, .5e0, +.25e2%)',
      'rgba(1f2, .5e1, .5e0, +.25e2%)',
      /* HSL */
      'hsl',
      'hsl()',
      'hsl(0, 0)',
      'hsl(0, 1, dog)',
      'hsl(0de, 0, 0)',
      'hsl(0gra, 0, 0)',
      'hsl(1, 2, 3, 4, 5)',
      'hsl(1/2/3)',
      'hsl(1,, 20, 255)',
      'hsl(1%,, 20%, 255%)',
      'hsl(1%, 255%)',
      'hsl(1%, 10%%, 255%)',
      'hsl(1%, %10%, 255%)',
      'hsl(1)',
      'hsl(1, 20, 255',
      'hsl 1, 20, 255',
      'hsl 1, 20, 255)',
      'hsl(1, a, 255)',
      'hsl (1, 2, 255)',
      'hsl(1,2,3..5)',
      'hsl(1, 2, 3.4.5)',
      'hslQ(1, 2, 255)',
      'h s l(1, 2, 255)',
      /* HSLA */
      'hsla()',
      'hsla(51 170 51 0.4)',
      'hsla(1, 2, 3, 4, 5)',
      'hsla(0, 0, 0, 0..5)',
      'hsla(0, 0, 0, 0.5.)',
      'hsla(0, 0, 0, 0%%)',
      'hsla(51 170 51 // 0.4)',
      'hsla(1ee2, .5e1, .5e0, +.25e2%)',
      'hsla(1f2, .5e1, .5e0, +.25e2%)',
      /* HEX */
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

    tests.forEach ( color => {
      t.throws ( () => Color.parse ( color ), `Unsupported color format: "${color}"` );
    });

  });

  it ( 'supports keywords', t => {

    const tests = [
      ['black', '#000000'],
      ['BLACK', '#000000']
    ];

    tests.forEach ( ([ keyword, result ]) => {
      t.is ( Hex.output ( Color.parse ( keyword ) ), result );
    });

  });

  it ( 'supports hex', t => {

    const tests = [
      /* 6 digit */
      ['#000000', '#000000'],
      ['#FFFFFF', '#ffffff'],
      ['#ffffff', '#ffffff'],
      ['#ae12b4', '#ae12b4'],
      ['#Ae12B4', '#ae12b4'],
      /* 3 digit */
      ['#000', '#000000'],
      ['#fff', '#ffffff'],
      ['#a2b', '#aa22bb'],
      ['#a2B', '#aa22bb'],
      /* 8 digit */
      ['#000000ff', '#000000'],
      ['#00000000', '#00000000'],
      ['#ffffffa8', '#ffffffa8'],
      ['#ffffffA8', '#ffffffa8'],
      /* 4 digit */
      ['#0000', '#00000000'],
      ['#ffff', '#ffffff'],
      ['#a2b', '#aa22bb'],
      ['#a2B', '#aa22bb'],
    ]

    tests.forEach ( ([ input, expected ]) => {
      t.is ( Hex.output ( Color.parse ( input ) ), expected );
    });

  });

  it ( 'supports RGB', t => {

    const tests = [
      /* Decimal 0~255 */
      ['rgb(1, 20, 255)', 'rgb(1, 20, 255)'],
      ['rgb(1.99, 20.5, 255)', 'rgb(2, 21, 255)'],
      ['rgb(300, 255, -100)', 'rgb(255, 255, 0)'],
      /* Percentage 0~100 */
      ['rgb(10%, 20%, 30%)', 'rgb(26, 51, 77)'],
      ['rgb(10.5%, 20.7%, 30%)', 'rgb(27, 53, 77)'],
      ['rgb(100% 200% -30%)', 'rgb(255, 255, 0)'],
      /* With commas and weird spaces */
      ['rgb(  1 , 20 , 255  )', 'rgb(1, 20, 255)'],
      ['rgb(1,20,255)', 'rgb(1, 20, 255)'],
      ['rgb( 1,20,255 )', 'rgb(1, 20, 255)'],
      /* Without commas */
      ['rgb(10% 20% 30%)', 'rgb(26, 51, 77)'],
      ['rgb(1 20 255)', 'rgb(1, 20, 255)'],
      ['rgb(   1    20     255   )', 'rgb(1, 20, 255)'],
      /* Mixed units */
      ['rgb(10% 20 30%)', 'rgb(26, 20, 77)'],
      ['rgb(1 25.5 25.5)', 'rgb(1, 26, 26)'],
      /* Weird casing */
      ['RGB(1, 20, 255)', 'rgb(1, 20, 255)'],
      ['rGb(1, 20, 255)', 'rgb(1, 20, 255)'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( RGB.output ( Color.parse ( input ) ), result )
    });

  });

  it ( 'supports RGBA', t => {

    const tests = [
      /* Fraction 0~1 */
      ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
      ['rgba(0, 0, 0)', 'rgb(0, 0, 0)'],
      ['rgba(0, 0, 0, 10)', 'rgb(0, 0, 0)'],
      ['rgba(0, 0, 0, -10)', 'rgba(0, 0, 0, 0)'],
      ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)'],
      ['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, 0.5)'],
      ['rgba(0, 0, 0,   0.5   )', 'rgba(0, 0, 0, 0.5)'], 
      /* Percentage 0~100 */
      ['rgba(0, 0, 0, 0%)', 'rgba(0, 0, 0, 0)'],
      ['rgba(0, 0, 0, 100%)', 'rgb(0, 0, 0)'],
      ['rgba(0, 0, 0, 110%)', 'rgb(0, 0, 0)'],
      ['rgba(0, 0, 0, -110%)', 'rgba(0, 0, 0, 0)'],
      ['rgba(0, 0, 0, 50%)', 'rgba(0, 0, 0, 0.5)'],
      ['rgba(0, 0, 0, 50.5%)', 'rgba(0, 0, 0, 0.505)'],
      /* With commas and weird spaces */
      ['rgba(  1 , 20 , 255, 0.5  )', 'rgba(1, 20, 255, 0.5)'],
      ['rgba(1,20,255,50%)', 'rgba(1, 20, 255, 0.5)'],
      ['rgba( 1,20,255,0.5 )', 'rgba(1, 20, 255, 0.5)'],
      /* With slash */
      ['rgba(51 170 51 / 0.4)', 'rgba(51, 170, 51, 0.4)'],
      ['rgba(51 170 51/0.4)', 'rgba(51, 170, 51, 0.4)'],
      ['rgba(51 170 51 / 40%)', 'rgba(51, 170, 51, 0.4)'],
      ['rgba(51, 170, 51 / 40%)', 'rgba(51, 170, 51, 0.4)'],
      ['rgba(51,170,51/40%)', 'rgba(51, 170, 51, 0.4)'],
      /* Scientific notation */
      ['rgba(1e2, .5e1, .5e0, +.25e2%)', 'rgba(100, 5, 1, 0.25)'],
      ['rgba(1e2, .5e1, .5e0, +.25e1%)', 'rgba(100, 5, 1, 0.025)'],
      ['rgba(1e2, .5e1, .5e0, +.25e0%)', 'rgba(100, 5, 1, 0.0025)'],
      ['rgba(1e2, .5e1, .5e0, .25e0)', 'rgba(100, 5, 1, 0.25)'],
      ['rgba(1e2, .5e1, .5e0, .25e1)', 'rgb(100, 5, 1)'],
      /* Mixed units */
      ['rgba(1, 10%, .5e0, +.25e2%)', 'rgba(1, 26, 1, 0.25)'],
      /* Weird casing */
      ['RGBA(1, 20, 255, 0.5)', 'rgba(1, 20, 255, 0.5)'],
      ['rgbA(1, 20, 255, 0.5)', 'rgba(1, 20, 255, 0.5)'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( RGB.output ( Color.parse ( input ) ), result )
    });

  });

  it ( 'supports HSL', t => {

    const tests = [
      /* No units */
      ['hsl(0, 0, 0)', 'hsl(0, 0, 0)'],
      ['hsl(0, 100, 0)', 'hsl(0, 0, 0)'],
      ['hsl(0, 0, 100)', 'hsl(0, 0, 100)'],
      ['hsl(0, 100, 100)', 'hsl(0, 0, 100)'],
      ['hsl(180, 50, 50)', 'hsl(180, 50, 50)'],
      ['hsl(180, 40.4, 70.4)', 'hsl(180, 40.4, 70.4)'],
      /* OOB (s & l clamp, h wraps) */
      ['hsl(-180, 40.4, 70.4)', 'hsl(180, 40.4, 70.4)'],
      ['hsl(180, -40.4, -70.4)', 'hsl(0, 0, 0)'],
      ['hsl(180, 400.4, 700.4)', 'hsl(0, 0, 100)'],
      ['hsl(540, 100, 50)', 'hsl(180, 100, 50)'],
      /* Degrees */
      ['hsl(-180deg, 50%, 50%)', 'hsl(180, 50, 50)'],
      ['hsl(0deg, 50%, 50%)', 'hsl(0, 50, 50)'],
      ['hsl(180deg, 50%, 50%)', 'hsl(180, 50, 50)'],
      ['hsl(360deg, 50%, 50%)', 'hsl(0, 50, 50)'],
      ['hsl(540deg, 50%, 50%)', 'hsl(180, 50, 50)'],
      /* Gradians */
      ['hsl(0grad, 50%, 50%)', 'hsl(0, 50, 50)'],
      ['hsl(200grad, 50%, 50%)', 'hsl(180, 50, 50)'],
      ['hsl(400grad, 50%, 50%)', 'hsl(0, 50, 50)'],
      /* Radians */
      ['hsl(0rad, 50%, 50%)', 'hsl(0, 50, 50)'],
      ['hsl(3.14rad, 50%, 50%)', 'hsl(180, 50, 50)'],
      /* Turns */
      ['hsl(0turn, 50%, 50%)', 'hsl(0, 50, 50)'],
      ['hsl(0.5turn, 50%, 50%)', 'hsl(180, 50, 50)'],
      ['hsl(1turn, 50%, 50%)', 'hsl(0, 50, 50)'],
      /* Scientific notation */
      ['hsl(1.8e2, 4.04e1, .704e2)', 'hsl(180, 40.4, 70.4)'],
      ['hsl(1.8e2deg, 4.04e1%, .704e2%)', 'hsl(180, 40.4, 70.4)'],
      ['hsl(1800e-1deg, 404e-1%, 7040e-2%)', 'hsl(180, 40.4, 70.4)'],
      /* Mixed units */
      ['hsl(180, 50, 50%)', 'hsl(180, 50, 50)'],
      ['hsl(180deg, 50, 50)', 'hsl(180, 50, 50)'],
      /* With commas and weird spaces */
      ['hsl( 0 ,   0   ,  0   )', 'hsl(0, 0, 0)'],
      ['hsl(0,0,0)', 'hsl(0, 0, 0)'],
      /* Without commas */
      ['hsl(0 0 0)', 'hsl(0, 0, 0)'],
      ['hsl(   0   0   0   )', 'hsl(0, 0, 0)'],
      ['hsl(180deg 50% 50%)', 'hsl(180, 50, 50)'],
      ['hsl(180 40.4 70.4)', 'hsl(180, 40.4, 70.4)'],
      /* Weird casing */
      ['HSL(0 0 0)', 'hsl(0, 0, 0)'],
      ['hSl(0 0 0)', 'hsl(0, 0, 0)'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( HSL.output ( Color.parse ( input ) ), result )
    });

  });

  it ( 'supports HSLA', t => {

    const tests = [
      /* Fraction 0~1 */
      ['hsla(0, 0, 0, 0)', 'hsla(0, 0, 0, 0)'],
      ['hsla(0, 0, 0)', 'hsl(0, 0, 0)'],
      ['hsla(0, 0, 0, 10)', 'hsl(0, 0, 0)'],
      ['hsla(0, 0, 0, -10)', 'hsla(0, 0, 0, 0)'],
      ['hsla(0, 0, 0, 0.5)', 'hsla(0, 0, 0, 0.5)'],
      ['hsla(0, 0, 0, .5)', 'hsla(0, 0, 0, 0.5)'],
      ['hsla(0, 0, 0,   0.5   )', 'hsla(0, 0, 0, 0.5)'], 
      /* Percentage 0~100 */
      ['hsla(0, 0, 0, 0%)', 'hsla(0, 0, 0, 0)'],
      ['hsla(0, 0, 0, 100%)', 'hsl(0, 0, 0)'],
      ['hsla(0, 0, 0, 110%)', 'hsl(0, 0, 0)'],
      ['hsla(0, 0, 0, -110%)', 'hsla(0, 0, 0, 0)'],
      ['hsla(0, 0, 0, 50%)', 'hsla(0, 0, 0, 0.5)'],
      ['hsla(0, 0, 0, 50.5%)', 'hsla(0, 0, 0, 0.505)'],
      /* With commas and weird spaces */
      ['hsla(  1 , 20 , 50, 0.5  )', 'hsla(1, 20, 50, 0.5)'],
      ['hsla(1,20,50,50%)', 'hsla(1, 20, 50, 0.5)'],
      ['hsla( 1,20,50,0.5 )', 'hsla(1, 20, 50, 0.5)'],
      /* With slash */
      ['hsla(0 0 0 / 0.4)', 'hsla(0, 0, 0, 0.4)'],
      ['hsla(0 0 0/0.4)', 'hsla(0, 0, 0, 0.4)'],
      ['hsla(0 0 0 / 40%)', 'hsla(0, 0, 0, 0.4)'],
      ['hsla(0, 0, 0 / 40%)', 'hsla(0, 0, 0, 0.4)'],
      ['hsla(0,0,0/40%)', 'hsla(0, 0, 0, 0.4)'],
      /* Scientific notation */
      ['hsla(1e2, 2e1, .5e2, +.25e2%)', 'hsla(100, 20, 50, 0.25)'],
      ['hsla(1e2, 2e1, .5e2, +.25e1%)', 'hsla(100, 20, 50, 0.025)'],
      ['hsla(1e2, 2e1, .5e2, +.25e0%)', 'hsla(100, 20, 50, 0.0025)'],
      ['hsla(1e2, 2e1, .5e2, .25e0)', 'hsla(100, 20, 50, 0.25)'],
      ['hsla(1e2, 2e1, .5e2, .25e1)', 'hsl(100, 20, 50)'],
      ['hsla(1e2, 2e1, .5e2, 25e-2)', 'hsla(100, 20, 50, 0.25)'],
      /* Mixed units */
      ['hsla(1, 20%, .5e2, +.25e2%)', 'hsla(1, 20, 50, 0.25)'],
      /* Weird casing */
      ['HSLA(1, 20, 50, 0.5)', 'hsla(1, 20, 50, 0.5)'],
      ['hSlA(1, 20, 50, 0.5)', 'hsla(1, 20, 50, 0.5)'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( HSL.output ( Color.parse ( input ) ), result )
    });

  })

});


/* IMPORT */

import {describe} from 'ava-spec';
import Color from '../dist/color';
import Hex from '../dist/color/hex';
import RGB from '../dist/color/rgb';

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
      'rgba(1f2, .5e1, .5e0, +.25e2%)'
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

});

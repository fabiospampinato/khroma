
/* IMPORT */

import {describe} from 'ava-spec';
import Color from '../dist/color';
import Hex from '../dist/color/hex';

/* COLOR */

describe ( 'Color', it => {

  it ( 'expects supported colors', t => {

    const tests = [
      'foo'
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

  /* RGB */

  it ( 'parses RGB as numbers (bounded by 0 and 255)', t => {

    const tests = [
      ['rgb(1, 20, 255)', '#0114ff'],
      ['rgb(1.99, 20.5, 255)', '#0215ff'],
      ['rgb(300, 255, -100)', '#ffff00'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( Hex.output ( Color.parse ( input ) ), result )
    });

  });

  it ( 'parses RGB as percentages (bounded by 0 and 100)', t => {

    const tests = [
      ['rgb(10%, 20%, 30%)', '#1a334d'],
      ['rgb(10.5%, 20.7%, 30%)', '#1b354d'],
      ['rgb(100% 200% -30%)', '#ffff00'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( Hex.output ( Color.parse ( input ) ), result )
    });

  });

  it ( 'parses RGB with commas', t => {

    const tests = [
      ['rgb(10%, 20%, 30%)', '#1a334d'],
      ['rgb(1 , 20 , 255)', '#0114ff'],
      ['rgb(1,20,255)', '#0114ff'],
      ['rgb( 1,20,255 )', '#0114ff'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( Hex.output ( Color.parse ( input ) ), result )
    });

  });

  it ( 'parses RGB without commas', t => {

    const tests = [
      ['rgb(10% 20% 30%)', '#1a334d'],
      ['rgb(1 20 255)', '#0114ff'],
      ['rgb(   1    20     255   )', '#0114ff'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( Hex.output ( Color.parse ( input ) ), result )
    });

  });

  it ( 'parses RGB with mixed units', t => {

    const tests = [
      ['rgb(10% 20 30%)', '#1a144d'],
      ['rgb(1 20 25.5)', '#01141a'],
    ];

    tests.forEach( ([ input, result ]) => {
      t.is ( Hex.output ( Color.parse ( input ) ), result )
    });

  });



  it ( 'throws an error when parsing malformed RGB input', t => {

    const tests = [
      'rgb(1,, 20, 255)',
      'rgb(1%,, 20%, 255%)',
      'rgb(1%, 255%)',
      'rgb(1)',
      'rgb()',
      'rgb(1, 20, 255',
      'rgb 1, 20, 255',
      'rgb 1, 20, 255)',
      'rgb(1, a, 255)',
    ];

    tests.forEach( color => {
      t.throws ( () => Color.parse ( color ), `Unsupported color format: "${color}"` );
    });

  });

});

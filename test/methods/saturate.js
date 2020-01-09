
/* IMPORT */

import {describe} from 'ava-spec';
import {saturate} from '../../dist';

/* SATURATE */

describe ( 'saturate', it => {

  it ( 'works', t => {

    const tests = [
      [['hsl(0, 0, 50)', '0%'], '#808080'],
      [['hsl(0, 0, 50)', '50%'], '#bf4040'],
      [['hsl(0, 0, 50)', '75%'], '#df2020'],
      [['hsl(0, 0, 50)', '100%'], '#ff0000'],
      [['hsl(0, 50, 50)', '100%'], '#ff0000'],
      [['hsl(0, 100, 50)', '100%'], '#ff0000'],
    ];

    tests.forEach ( ([ args, result ]) => {
      t.is ( saturate ( ...args ), result );
    });

  });

  it ( 'expects an amount between 0% and 100%', t => {

    t.throws ( () => saturate ( '#000', '200%' ) );
    t.throws ( () => saturate ( '#000', '-10%' ) );

  });

});

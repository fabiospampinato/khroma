
/* IMPORT */

import {describe} from 'ava-spec';
import {desaturate} from '../../dist';

/* DESATURATE */

describe ( 'desaturate', it => {

  it ( 'works', t => {

    const tests = [
      [['hsl(0, 100%, 50%)', '0%'], '#ff0000'],
      [['hsl(0, 100%, 50%)', '50%'], '#bf4040'],
      [['hsl(0, 100%, 50%)', '75%'], '#9f6060'],
      [['hsl(0, 100%, 50%)', '100%'], '#808080'],
      [['hsl(0, 50%, 50%)', '100%'], '#808080'],
      [['hsl(0, 0%, 50%)', '100%'], '#808080'],
    ];

    tests.forEach ( ([ args, result ]) => {
      t.is ( desaturate ( ...args ), result );
    });

  });

  it ( 'expects an amount between 0% and 100%', t => {

    t.throws ( () => desaturate ( '#000', '200%' ) );
    t.throws ( () => desaturate ( '#000', '-10%' ) );

  });

});

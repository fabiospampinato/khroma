
/* IMPORT */

import Color from '../color';
import HSL from '../color/hsl';
import Utils from '../utils';
import {Channels} from '../types';


/* CHANGE */

function change ( color: string, options: Channels ): string {

  const { r, g, b, h, l, s, a } = options;

  const optionsHasProperty = prop => options.hasOwnProperty ( prop );
  if ( [ 'r', 'g', 'b' ].some ( optionsHasProperty ) && [ 'h', 's', 'l' ].some ( optionsHasProperty ) ) {

    throw new Error ( 'Cannot change an RGB property at the same time as an HSL property' );

  }

  [ r, g, b ].forEach ( amount => { if ( amount ) Utils.checkRange ( amount, 0, 255 ) } );

  [ l, s ].forEach ( amount => { if ( amount ) Utils.checkRange ( amount, 0, 100 ) } );

  if ( a ) Utils.checkRange ( a, 0, 1 );

  let rgba = Color.parse ( color );

  if ( r !== undefined ) rgba.r = r;
  if ( g !== undefined ) rgba.g = g;
  if ( b !== undefined ) rgba.b = b;

  if ( [ 'h', 's', 'l' ].some ( optionsHasProperty ) ) {

    const hsl = HSL.rgb2hsl ( rgba );

    if ( h !== undefined ) hsl.h = h % 360;
    if ( s !== undefined ) hsl.s = s;
    if ( l !== undefined ) hsl.l = l;

    rgba = HSL.hsl2rgb ( hsl );

  }

  if ( a !== undefined ) rgba.a = a;

  return Color.output ( rgba );

}

/* EXPORT */

export default change;

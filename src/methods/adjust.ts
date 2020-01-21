
/* IMPORT */

import Color from '../color';
import HSL from '../color/hsl';
import Utils from '../utils';
import {Channels} from '../types';

/* ADJUST */

function adjust ( color: string, options: Channels ): string {

  const { r, g, b, h, l, s, a } = options;

  const optionsHasProperty = prop => options.hasOwnProperty ( prop );
  if ( [ 'r', 'g', 'b' ].some ( optionsHasProperty ) && [ 'h', 's', 'l' ].some ( optionsHasProperty ) ) {

    throw new Error ( 'Cannot adjust an RGB property at the same time as an HSL property' );

  }

  [ r, g, b ].forEach ( amount => { if ( amount ) Utils.checkRange ( amount, -255, 255 ) } );

  [ l, s ].forEach ( amount => { if ( amount ) Utils.checkRange ( amount, -100, 100 ) } );

  if ( a ) Utils.checkRange ( a, -1, 1 );

  let rgba = Color.parse ( color );

  if ( r ) rgba.r = Utils.clamp ( rgba.r + r, 0, 255 );
  if ( g ) rgba.g = Utils.clamp ( rgba.g + g, 0, 255 );
  if ( b ) rgba.b = Utils.clamp ( rgba.b + b, 0, 255 );

  if ( h || s || l ) {

    const hsl = HSL.rgb2hsl ( rgba );
  
    if ( h ) hsl.h = ( hsl.h + h ) % 360;
    if ( s ) hsl.s = Utils.clamp ( hsl.s + s, 0, 100 );
    if ( l ) hsl.l = Utils.clamp ( hsl.l + l, 0, 100 );

    
    rgba = HSL.hsl2rgb ( hsl );

  }

  if ( a ) rgba.a = Utils.clamp ( rgba.a + a, 0, 1 );

  return Color.output ( rgba );

}

/* EXPORT */

export default adjust;

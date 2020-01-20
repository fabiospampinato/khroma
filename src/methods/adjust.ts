
/* IMPORT */

import Color from '../color';
import HSL from '../color/hsl';
import Utils from '../utils';

/* ADJUST */

function adjust ( color: string, options: { red?: number, green?: number, blue?: number, hue?: number, saturation?: number, lightness?: number, alpha?: number } ): string {

  const { red, green, blue, hue, lightness, saturation, alpha } = options;

  const optionsHasProperty = prop => options.hasOwnProperty ( prop );
  if ( ( [ 'red', 'green', 'blue' ].some ( optionsHasProperty ) ) && ( [ 'hue', 'saturation', 'lightness' ].some ( optionsHasProperty ) ) ) {

    throw new Error ( 'Cannot adjust an RGB property at the same time as an HSL property' )

  }

  [ red, green, blue ].forEach ( amount => amount && Utils.checkRange ( amount, -255, 255 ) );

  [ lightness, saturation ].forEach ( amount => amount && Utils.checkRange ( amount, -100, 100 ) );

  alpha && Utils.checkRange ( alpha, -1, 1 );

  let rgba = Color.parse ( color );

  if ( red ) rgba.r = Utils.clamp ( rgba.r + red, 0, 255 );
  if ( green ) rgba.g = Utils.clamp ( rgba.g + green, 0, 255 );
  if ( blue ) rgba.b = Utils.clamp ( rgba.b + blue, 0, 255 );

  if ( hue || saturation || lightness ) {

    const hsl = HSL.rgb2hsl ( rgba );
  
    if ( hue ) hsl.h = ( hsl.h + hue ) % 360;
    if ( saturation ) hsl.s = Utils.clamp ( hsl.s + saturation, 0, 100 );
    if ( lightness ) hsl.l = Utils.clamp ( hsl.l + lightness, 0, 100 );

    
    rgba = HSL.hsl2rgb ( hsl );

  }

  if ( alpha ) rgba.a = Utils.clamp ( rgba.a + alpha, 0, 1 );

  return Color.output ( rgba );

}

/* EXPORT */

export default adjust;

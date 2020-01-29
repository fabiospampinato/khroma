
/* IMPORT */

import Color from '../color';
import Utils from '../utils';
import adjust from './adjust';
import HSL from '../color/hsl';
import {Channels} from '../types';

/* SCALE */

function scale ( color: string, weights: Channels ): string {

  const { r, g, b, h, l, s, a } = weights;

  const weightsHasProperty = prop => weights.hasOwnProperty ( prop );
  if ( [ 'r', 'g', 'b' ].some ( weightsHasProperty ) && [ 'h', 's', 'l' ].some ( weightsHasProperty ) ) {

    throw new Error ( 'Cannot scale an RGB property at the same time as an HSL property' );

  }

  Object.values ( weights ).forEach ( channel => channel && Utils.checkRange ( channel, -100, 100 ) )

  const adjustments: Channels = {};

  const delta = ( channel: number, weight: number, max: number ) => weight > 0 ? ( max - channel ) * weight / 100 : channel * weight / 100;
  
  const rgba = Color.parse ( color );

  if ( r ) adjustments.r = delta ( rgba.r, r, 255 );
  if ( g ) adjustments.g = delta ( rgba.g, g, 255 );
  if ( b ) adjustments.b = delta ( rgba.b, b, 255 );
  if ( a ) adjustments.a = delta ( rgba.a, a, 1 );

  if ( [ 'h', 's', 'l' ].some ( weightsHasProperty ) ) {

    const hsl = HSL.rgb2hsl ( rgba );

    if ( h ) adjustments.h = delta ( hsl.h, h, 360 );
    if ( s ) adjustments.s = delta ( hsl.s, s, 100 );
    if ( l ) adjustments.l = delta ( hsl.l, l, 100 );

  }

  return adjust ( color, adjustments );

}

/* EXPORT */

export default scale;

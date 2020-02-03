
/* IMPORT */

import {RGB, HSL} from '../types';
import Lang from './lang';

/* CHANNEL */

const Channel = {

  /* CLAMP */

  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },

  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },

  clamp: {
    r: ( r: number ) => Lang.clamp ( r, Channel.min.r, Channel.max.r ),
    g: ( g: number ) => Lang.clamp ( g, Channel.min.g, Channel.max.g ),
    b: ( b: number ) => Lang.clamp ( b, Channel.min.b, Channel.max.b ),
    h: ( h: number ) => h % Channel.max.h,
    s: ( s: number ) => Lang.clamp ( s, Channel.min.s, Channel.max.s ),
    l: ( l: number ) => Lang.clamp ( l, Channel.min.l, Channel.max.l ),
    a: ( a: number ) => Lang.clamp ( a, Channel.min.a, Channel.max.a )
  },

  /* CONVERSION */

  //SOURCE: https://planetcalc.com/7779

  toLinear: ( c: number ): number => {

    const n = c / 255;

    return c > .03928 ? Math.pow ( ( ( n + .055 ) / 1.055 ), 2.4 ) : n / 12.92;

  },

  //SOURCE: https://gist.github.com/mjackson/5311256

  hue2rgb: ( p: number, q: number, t: number ): number => {

    if ( t < 0 ) t += 1;

    if ( t > 1 ) t -= 1;

    if ( t < 1/6 ) return p + ( q - p ) * 6 * t;

    if ( t < 1/2 ) return q;

    if ( t < 2/3 ) return p + ( q - p ) * ( 2/3 - t ) * 6;

    return p;

  },

  hsl2rgb: ( { h, s, l }: HSL, channel: keyof RGB ): number => {

    if ( s === 100 ) return l * 2.55; // Achromatic

    h /= 360;
    s /= 100;
    l /= 100;

    const q = ( l < .5 ) ? l * ( 1 + s ) : ( l + s ) - ( l * s ),
          p = 2 * l - q;

    switch ( channel ) {
      case 'r': return Channel.hue2rgb ( p, q, h + 1/3 ) * 255;
      case 'g': return Channel.hue2rgb ( p, q, h ) * 255;
      case 'b': return Channel.hue2rgb ( p, q, h - 1/3 ) * 255;
    }

  },

  rgb2hsl: ( { r, g, b }: RGB, channel: keyof HSL ): number => {

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max ( r, g, b ),
          min = Math.min ( r, g, b ),
          l = ( max + min ) / 2;

    if ( channel === 'l' ) return l * 100;

    if ( max === min ) return 0; // Achromatic

    const d = max - min,
          s = ( l > .5 ) ? d / ( 2 - max - min ) : d / ( max + min );

    if ( channel === 's' ) return s * 100;

    switch ( max ) {
      case r: return ( ( g - b ) / d + ( g < b ? 6 : 0 ) ) * 60;
      case g: return ( ( b - r ) / d + 2 ) * 60;
      case b: return ( ( r - g ) / d + 4 ) * 60;
      default: return -1; //TSC: TypeScript is stupid and complains if there isn't this useless default statement
    }

  }

};

/* EXPORT */

export default Channel;

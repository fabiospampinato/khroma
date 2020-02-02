
/* IMPORT */

import _ from '../utils';
import {RGBA, HSLA, CHANNELS} from '../types';

//TODO: Fix TypeScript issues
//TODO: Maybe rename this to "Color"

/* CHANNELS */

enum SettingKind {
  NONE = 0,
  RGB = 1,
  HSL = 2
};

class Channels {

  /* VARIABLES */

  data: RGBA | HSLA | CHANNELS;
  isRGB: boolean;
  setted: SettingKind;

  /* CONSTRUCTOR */

  constructor ( data: RGBA | HSLA | CHANNELS ) {

    this.set ( data );

  }

  /* API */

  get (): RGBA | HSLA | CHANNELS {

    return this.data;

  }

  set ( data: RGBA | HSLA | CHANNELS ): void {

    this.data = data;
    this.isRGB = 'r' in data;
    this.setted = SettingKind.NONE;

  }

  setting ( kind: SettingKind ) {

    if ( this.setted && this.setted !== kind ) throw new Error ( 'Cannot set RGB and HSL channels at the same time' );

    this.setted = kind;

  }

  ensureHSL () {

    const {h, s, l} = this.rgb2hsl ( this.data as any );

    if ( _.is.undefined ( this.data['h'] ) ) this.data['h'] = h;
    if ( _.is.undefined ( this.data['s'] ) ) this.data['s'] = s;
    if ( _.is.undefined ( this.data['l'] ) ) this.data['l'] = l;

  }

  ensureRGB () {

    const {r, g, b} = this.hsl2rgb ( this.data as any );

    if ( _.is.undefined ( this.data['r'] ) ) this.data['r'] = r;
    if ( _.is.undefined ( this.data['g'] ) ) this.data['g'] = g;
    if ( _.is.undefined ( this.data['b'] ) ) this.data['b'] = b;

  }

  /* PROPERTIES - GET */

  get r (): number {
    if ( this.data.hasOwnProperty ( 'r' ) && ( ( this.isRGB && this.setted !== SettingKind.HSL ) || this.setted === SettingKind.RGB ) ) return this.data['r'];
    this.ensureHSL ();
    return this.hsl2rgb ( this.data as any ).r;
  }

  get g (): number {
    if ( this.data.hasOwnProperty ( 'g' ) && ( ( this.isRGB && this.setted !== SettingKind.HSL ) || this.setted === SettingKind.RGB ) ) return this.data['g'];
    this.ensureHSL ();
    return this.hsl2rgb ( this.data as any ).g;
  }

  get b (): number {
    if ( this.data.hasOwnProperty ( 'b' ) && ( ( this.isRGB && this.setted !== SettingKind.HSL ) || this.setted === SettingKind.RGB ) ) return this.data['b'];
    this.ensureHSL ();
    return this.hsl2rgb ( this.data as any ).b;
  }

  get h (): number {
    if ( this.data.hasOwnProperty ( 'h' ) && ( ( !this.isRGB && this.setted !== SettingKind.RGB ) || this.setted === SettingKind.HSL ) ) return this.data['h'];
    this.ensureRGB ();
    return this.rgb2hsl ( this.data as any ).h;
  }

  get s (): number {
    if ( this.data.hasOwnProperty ( 's' ) && ( ( !this.isRGB && this.setted !== SettingKind.RGB ) || this.setted === SettingKind.HSL ) ) return this.data['s'];
    this.ensureRGB ();
    return this.rgb2hsl ( this.data as any ).s;
  }

  get l (): number {
    if ( this.data.hasOwnProperty ( 'l' ) && ( ( !this.isRGB && this.setted !== SettingKind.RGB ) || this.setted === SettingKind.HSL ) ) return this.data['l'];
    this.ensureRGB ();
    return this.rgb2hsl ( this.data as any ).l;
  }

  get a (): number {
    return this.data.a;
  }

  /* PROPERTIES - SET */

  set r ( r: number ) {
    this.setting ( SettingKind.RGB );
    this.data['r'] = r;
  }

  set g ( g: number ) {
    this.setting ( SettingKind.RGB );
    this.data['g'] = g;
  }

  set b ( b: number ) {
    this.setting ( SettingKind.RGB );
    this.data['b'] = b;
  }

  set h ( h: number ) {
    this.setting ( SettingKind.HSL );
    this.data['h'] = h;
  }

  set s ( s: number ) {
    this.setting ( SettingKind.HSL );
    this.data['s'] = s;
  }

  set l ( l: number ) {
    this.setting ( SettingKind.HSL );
    this.data['l'] = l;
  }

  set a ( a: number ) {
    this.data['a'] = a;
  }

  //TODO: Rewrite the following code, make it blazing fast, take advantage of the lazy-evaluation capabilities of this class

  //URL: https://gist.github.com/mjackson/5311256

  hsl2rgb ( { h, s, l, a }: HSLA ): RGBA {
    let r: number, g: number, b: number;
    h /= 360;
    s /= 100;
    l /= 100;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = ( p: number, q: number, t: number ) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return {
      r: r * 255,
      g: g * 255,
      b: b * 255,
      a: _.is.undefined ( a ) ? 1 : a
    };

  }

  rgb2hsl ( { r, g, b, a }: RGBA ): HSLA {

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h: number = 0;
    let s: number = 0;
    const l = (max + min) / 2;

    if (max !== min) { // not achromatic
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }

      h /= 6;
    }

    return {
      h: h * 360,
      s: s * 100,
      l: l * 100,
      a: _.is.undefined ( a ) ? 1 : a
    }
  }

}

/* EXPORT */

export default Channels;


/* UTILS */

const Utils = {

  checkRange ( number: number, lower: number, upper: number ): void {

    if ( number >= lower && number <= upper ) return;

    throw new Error ( `Value ${number} must be between ${lower} and ${upper}` );

  },

  clamp ( number: number, lower: number, upper: number ): number {

    return Math.min ( upper, Math.max ( lower, number ) );

  },

  padStart ( str: string, char: string, length: number ) {

    if ( str.length >= length ) return str;

    return `${char.repeat ( length - str.length )}${str}`.slice ( - length );

  },

  /*
   * ==== Units ====
   * CSS has a number of different types of units that our library easily converts between.
   * Here is how we have defined them:
   * 
   * | Name | Short for   | Range |
   * | ---- | ----------- | ----- |
   * | per  | percent     | 0~100 |
   * | dec  | decimal     | 0~255 |
   * | frac | fraction    | 0~1   |
   * | hex  | hexadecimal | 00~FF |
   */

  per2dec ( per: number | string ): number {
    
    return typeof per === 'number' ? 
        Math.round ( 255 * per / 100 ) : 
        Math.round ( 255 * parseFloat ( per ) / 100 );

  },

  per2frac ( per: number | string ): number {

    return typeof per === 'number' ? 
        per / 100 : 
        parseFloat ( per ) / 100;

  },

  per2hex ( per: number,  ): string {
    
    return Utils.dec2hex ( Utils.per2dec ( per ) );
    
  },
  
  frac2dec ( frac: number ): number {

    return Math.round ( 255 * frac );

  },

  frac2per ( frac: number ): number {

    // weird muliplication/divison so I can get percentages rounded
    // to the tenths place
    return Math.round ( 1000 * frac ) / 10;

  },

  frac2deg ( frac: number ): number {

    return Math.round ( 360 * frac );

  },

  dec2per ( dec: number ): number {

    return ( dec / 255 * 100 );

  },

  dec2frac ( dec: number ): number {

    return ( dec / 255 );

  },

  dec2hex ( dec: number, padding: number = 2 ): string {

    return Utils.padStart ( Math.round ( dec ).toString ( 16 ), '0', padding );

  },

  hex2per ( hex: string ): number {

    return Utils.dec2per ( Utils.hex2dec ( hex ) );

  },

  hex2dec ( hex: string ): number {

    return parseInt ( hex, 16 );

  },

  deg2frac ( deg: number | string ) {

    return typeof deg === 'number' ? 
        Math.abs ( deg % 360 / 360 ) : 
        Math.abs ( parseFloat ( deg ) % 360 / 360 );

  },

  /* Color conversion */

  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h, s, and l in the set [0, 1].
   * 
   * Source: https://gist.github.com/mjackson/5311256
   */
  rgbToHsl( r: number, g: number, b: number ) {
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h: number, s: number, l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }

      h /= 6;
    }

    return [ h, s, l ];
  },

  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h, s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   *
   * Source: https://gist.github.com/mjackson/5311256
   */
  hslToRgb(h: number, s: number, l: number) {
    var r: number, g: number, b: number;

    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;

      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [ Math.round ( r * 255 ), Math.round ( g * 255 ), Math.round ( b * 255 ) ];
  }

};

/* EXPORT */

export default Utils;

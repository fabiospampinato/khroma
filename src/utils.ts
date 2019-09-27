import { RGBA, HSLA } from "./types";

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

  per2dec ( per: number ): number {

    return Math.round ( 255 * per );

  },

  per2hex ( per: number,  ): string {

    return Utils.dec2hex ( Utils.per2dec ( per ) );

  },

  dec2per ( dec: number ): number {

    return ( dec * 100 / 255 );

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

  rgba2hsla ( rgba: RGBA ): HSLA {

    const red = rgba.r / 255;
    const green = rgba.g / 255;
    const blue = rgba.b / 255;

    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const lightness = (max + min) / 2;

    if (max === min) {

      // achromatic
      if (rgba.a !== undefined) {

        return {
          h: 0,
          s: 0,
          l: lightness,
          a: rgba.a,
        }

      } else {

        return { h: 0, s: 0, l: lightness, a: 1 }

      }

    }

    let hue;
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / ( 2 - max - min ) : delta / ( max + min );
    switch ( max ) {

      case red:
        hue = ( green - blue ) / delta + ( green < blue ? 6 : 0 );
        break
      case green:
        hue = ( blue - red ) / delta + 2;
        break
      default:
        // blue case
        hue = ( red - green ) / delta + 4;
        break
      
    }

    hue *= 60;
    if (rgba.a !== undefined) {
      return {
        h: hue,
        s: saturation,
        l: lightness,
        a: rgba.a,
      };
    }

    return { h: hue, s: saturation, l: lightness, a: 1 };

  },

  hsla2rgba ( hsl: HSLA ): RGBA {

    var hue = hsl.h;
    var saturation = hsl.s;
    var lightness = hsl.l;

    if (saturation === 0) {
      // achromatic
      return { r: lightness, g: lightness, b: lightness, a: hsl.a | 1 };
    }
  
    // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
    const huePrime = ( ( ( hue % 360 ) + 360 ) % 360 ) / 60;
    const chroma = ( 1 - Math.abs( 2 * lightness - 1 ) ) * saturation;
    const secondComponent = chroma * ( 1 - Math.abs( ( huePrime % 2 ) - 1 ) );
  
    let red = 0;
    let green = 0;
    let blue = 0;
  
    if ( huePrime >= 0 && huePrime < 1 ) {

      red = chroma;
      green = secondComponent;

    } else if ( huePrime >= 1 && huePrime < 2 ) {

      red = secondComponent;
      green = chroma;

    } else if ( huePrime >= 2 && huePrime < 3 ) {

      green = chroma;
      blue = secondComponent;

    } else if ( huePrime >= 3 && huePrime < 4 ) {

      green = secondComponent;
      blue = chroma;

    } else if ( huePrime >= 4 && huePrime < 5 ) {

      red = secondComponent;
      blue = chroma;

    } else if ( huePrime >= 5 && huePrime < 6 ) {

      red = chroma;
      blue = secondComponent;

    }
  
    const lightnessModification = lightness - chroma / 2;
    return {
      r: red + lightnessModification,
      g: green + lightnessModification,
      b: blue + lightnessModification,
      a: hsl.a | 1
    };

  }

};

/* EXPORT */

export default Utils;

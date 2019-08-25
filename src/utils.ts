
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

  }

};

/* EXPORT */

export default Utils;

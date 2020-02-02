
/* UNIT */

const Unit = {

  frac2hex ( frac: number ): string {

    const hex = Math.round ( frac * 255 ).toString ( 16 );

    return hex.length > 1 ? hex : `0${hex}`;

  },

  dec2hex ( dec: number ): string {

    const hex = Math.round ( dec ).toString ( 16 );

    return hex.length > 1 ? hex : `0${hex}`;

  },

  hex2dec ( hex: string ): number {

    return parseInt ( hex, 16 );

  }

};

/* EXPORT */

export default Unit;

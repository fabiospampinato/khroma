
/* IMPORT */

const {rgb, rgba, hsl, hsla, red, green, blue, alpha, hue, saturation, lightness, darken, lighten, opacify, transparentize, saturate, desaturate, grayscale, invert, complement, scale, adjust, change, mix, luminance, isDark, isLight} = require ( '../dist' ),
      {default: Color} = require ( '../dist/color' ),
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  log: 'compact',
  iterations: 2500
});

benchmark.group ( 'parse', () => {

  benchmark ({
    name: 'keyword',
    fn: () => {
      Color.parse ( 'red' );
    }
  });

  benchmark.group ( 'hex', () => {

    benchmark ({
      name: 'RGB',
      fn: () => {
        Color.parse ( '#fc0' );
      }
    });

    benchmark ({
      name: 'RGBA',
      fn: () => {
        Color.parse ( '#fc08' );
      }
    });

    benchmark ({
      name: 'RRGGBB',
      fn: () => {
        Color.parse ( '#ffcc00' );
      }
    });

    benchmark ({
      name: 'RRGGBBAA',
      fn: () => {
        Color.parse ( '#ffcc0088' );
      }
    });

  });

  benchmark.group ( 'rgb', () => {

    benchmark ({
      name: 'rgb',
      fn: () => {
        Color.parse ( 'rgb(255, 204, 0)' );
      }
    });

    benchmark ({
      name: 'rgba',
      fn: () => {
        Color.parse ( 'rgb(255, 204, 0, .5)' );
      }
    });

    benchmark ({
      name: 'rgba:percentage',
      fn: () => {
        Color.parse ( 'rgb(100%, 80%, 0%, .5)' );
      }
    });

    benchmark ({
      name: 'rgba:scientific',
      fn: () => {
        Color.parse ( 'rgba(1e2, .5e1, .5e0, +.25e2%)' );
      }
    });

  });

  benchmark.group ( 'hsl', () => {

    benchmark ({
      name: 'hsl',
      fn: () => {
        Color.parse ( 'hsl(150, 50, 50)' );
      }
    });

    benchmark ({
      name: 'hsla',
      fn: () => {
        Color.parse ( 'hsla(150, 50, 50, .5)' );
      }
    });

    benchmark ({
      name: 'hsla:percentage',
      fn: () => {
        Color.parse ( 'hsl(0deg, 50%, 50%, .5)' );
      }
    });

    benchmark ({
      name: 'hsla:scientific',
      fn: () => {
        Color.parse ( 'hsla(1e2, 2e1, .5e2, +.25e2%)' );
      }
    });

    benchmark ({
      name: 'hsla:grad',
      fn: () => {
        Color.parse ( 'hsl(0grad, 50%, 50%, .5)' );
      }
    });

    benchmark ({
      name: 'hsla:turn',
      fn: () => {
        Color.parse ( 'hsl(1turn, 50%, 50%, .5)' );
      }
    });

  });

});

benchmark.group ( 'create', () => {

  benchmark ({
    name: 'rgb',
    fn: () => {
      rgb ( 255, 204, 0 );
    }
  });

  benchmark ({
    name: 'rgba',
    fn: () => {
      rgba ( 255, 204, 0, 136 );
    }
  });

  benchmark ({
    name: 'hsl',
    fn: () => {
      hsl ( 150, 50, 50 );
    }
  });

  benchmark ({
    name: 'hsla',
    fn: () => {
      hsla ( 150, 50, 50, .5 );
    }
  });

});

benchmark.group ( 'get', () => {

  benchmark ({
    name: 'red',
    fn: () => {
      red ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'green',
    fn: () => {
      green ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'blue',
    fn: () => {
      blue ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'alpha',
    fn: () => {
      alpha ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'hue',
    fn: () => {
      hue ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'saturation',
    fn: () => {
      saturation ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'lightness',
    fn: () => {
      lightness ( '#ffcc00' );
    }
  });

});

benchmark.group ( 'edit', () => {

  benchmark ({
    name: 'rgba',
    fn: () => {
      rgba ( '#ffcc00', .5 );
    }
  });

  benchmark ({
    name: 'darken',
    fn: () => {
      darken ( '#ffcc00', 50 );
    }
  });

  benchmark ({
    name: 'lighten',
    fn: () => {
      lighten ( '#ffcc00', 50 );
    }
  });

  benchmark ({
    name: 'opacify',
    fn: () => {
      opacify ( '#ffcc00', .5 );
    }
  });

  benchmark ({
    name: 'transparentize',
    fn: () => {
      transparentize ( '#ffcc00', .5 );
    }
  });

  benchmark ({
    name: 'saturate',
    fn: () => {
      saturate ( '#ffcc00', 50 );
    }
  });

  benchmark ({
    name: 'desaturate',
    fn: () => {
      desaturate ( '#ffcc00', 50 );
    }
  });

  benchmark ({
    name: 'grayscale',
    fn: () => {
      grayscale ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'invert',
    fn: () => {
      invert ( '#ffcc00', 50 );
    }
  });

  benchmark ({
    name: 'complement',
    fn: () => {
      complement ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'scale',
    fn: () => {
      scale ( '#ffcc00', { r: 50, g: 50, b: 50 } );
    }
  });

  benchmark ({
    name: 'adjust',
    fn: () => {
      adjust ( '#ffcc00', { a: -.5 } );
    }
  });

  benchmark ({
    name: 'change',
    fn: () => {
      change ( '#ffcc00', { a: .5 } );
    }
  });

  benchmark ({
    name: 'mix',
    fn: () => {
      mix ( '#ffcc00', '#000000', 50 );
    }
  });

});

benchmark.group ( 'extras', () => {

  benchmark ({
    name: 'luminance',
    fn: () => {
      luminance ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'isDark',
    fn: () => {
      isDark ( '#ffcc00' );
    }
  });

  benchmark ({
    name: 'isLight',
    fn: () => {
      isLight ( '#ffcc00' );
    }
  });

});

benchmark.summary ();
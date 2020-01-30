
/* IMPORT */

import opacify from './opacify';
import transparentize from './transparentize';
import alpha from './alpha';
import opacity from './alpha'; // alias
import red from './red';
import green from './green';
import blue from './blue';
import hue from './hue';
import lightness from './lightness';
import saturation from './saturation';
import darken from './darken';
import saturate from './saturate';
import lighten from './lighten';
import desaturate from './desaturate';
import hsla from './hsla';
import hsl from './hsla'; // alias
import rgba from './rgba';
import rgb from './rgba'; // alias
import adjust from './adjust';
import change from './change';
import complement from './complement';
import grayscale from './grayscale';
import mix from './mix';
import invert from './invert';
import scale from './scale';
import luminance from './luminance';
import isLight from './is_light';

/* EXPORT */

export {
  /* EDIT */
  opacify,
  transparentize,
  darken,
  lighten,
  saturate,
  desaturate,
  adjust,
  change,
  complement,
  grayscale,
  mix,
  invert,
  scale,
  /* GET */
  alpha,
  opacity,
  red,
  green,
  blue,
  hue,
  lightness,
  saturation,
  /* CREATE */
  hsla,
  hsl,
  rgba,
  rgb,
  /* EXTRAS */
  luminance,
  isLight,
};

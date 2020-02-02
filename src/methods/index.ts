
/* IMPORT */

//TODO: Organize these better

import hex from './rgba'; // Alias
import rgb from './rgba'; // Alias
import rgba from './rgba';
import hsl from './hsla'; // Alias
import hsla from './hsla';
import channel from './channel';
import red from './red';
import green from './green';
import blue from './blue';
import alpha from './alpha';
import opacity from './alpha'; // Alias
import hue from './hue';
import saturation from './saturation';
import lightness from './lightness';
import luminance from './luminance';
import isDark from './is_dark';
import isLight from './is_light';
import darken from './darken';
import lighten from './lighten';
import opacify from './opacify';
import fadeIn from './opacify'; // Alias
import transparentize from './transparentize';
import fadeOut from './transparentize'; // Alias
import saturate from './saturate';
import desaturate from './desaturate';
import grayscale from './grayscale';
import invert from './invert';
import complement from './complement';
import scale from './scale';
import adjust from './adjust';
import change from './change';
import mix from './mix';

/* EXPORT */

export {
  /* CREATE */
  hex,
  rgb,
  rgba,
  hsl,
  hsla,
  /* CHANNEL */
  channel,
  red,
  green,
  blue,
  alpha,
  opacity,
  hue,
  saturation,
  lightness,
  /* INSPECT */
  luminance,
  isDark,
  isLight,
  /* EDIT - SINGLE CHANNEL */
  darken,
  lighten,
  opacify,
  fadeIn,
  transparentize,
  fadeOut,
  saturate,
  desaturate,
  grayscale,
  complement,
  /* EDIT - ADVANCED */
  invert,
  scale,
  adjust,
  change,
  mix
};


/* TYPES */

type RGBA = {
  r: number, // Red (0~255)
  g: number, // Green (0~255)
  b: number, // Blue (0~255)
  a: number // Alpha (0~1)
};

type HSLA = {
  h: number, // Hue (0~360)
  s: number, // Saturation (0~100)
  l: number, // Lightness (0~100)
  a: number // Alpha (0~1)
};

type CHANNEL = 'r' | 'g' | 'b' | 'h' | 's' | 'l' | 'a';

type CHANNELS = Record<CHANNEL, number>;

/* EXPORT */

export {RGBA, HSLA, CHANNEL, CHANNELS};

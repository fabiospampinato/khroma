
/* TYPES */

type RGBA = {
  r: number, // Red - 0~255
  g: number, // Green - 0~255
  b: number, // Blue - 0~255
  a: number // Alpha - 0~1
};

type HSLType = {
  h: number, // Hue - 0~360
  s: number, // Saturation - 0~100
  l: number  // Lightness  - 0~100 
}

type Channels = {
  r?: number, // Red
  g?: number, // Green
  b?: number, // Blue
  h?: number, // Hue
  s?: number, // Saturation
  l?: number, // Lightness
  a?: number  // Alpha
}

/* EXPORT */

export {RGBA, HSLType, Channels};

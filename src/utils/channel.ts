
/* IMPORT */

import Lang from './lang';

/* CHANNEL */

const Channel = {

  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },

  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },

  clamp: {
    r: ( r: number ) => Lang.clamp ( r, Channel.min.r, Channel.max.r ),
    g: ( g: number ) => Lang.clamp ( g, Channel.min.g, Channel.max.g ),
    b: ( b: number ) => Lang.clamp ( b, Channel.min.b, Channel.max.b ),
    h: ( h: number ) => h % Channel.max.h,
    s: ( s: number ) => Lang.clamp ( s, Channel.min.s, Channel.max.s ),
    l: ( l: number ) => Lang.clamp ( l, Channel.min.l, Channel.max.l ),
    a: ( a: number ) => Lang.clamp ( a, Channel.min.a, Channel.max.a )
  }

};

/* EXPORT */

export default Channel;

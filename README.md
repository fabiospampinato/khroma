# SASS.js //TODO: Find new name

A port of SASS' functions for manipulating colors. //TODO: Update description

## Install

```sh
npm install --save sass.js
```

## Usage

```ts
import {red, isDark, darken, change} from 'sass.js';

red ( '#ffffff' ); // => 255
isDark ( 'white' ); // => false
darken ( 'hsl( 0, 5%, 100% )', 50 ); // => 'hsl( 0, 5%, 50% )'
change ( 'rgb( 255, 255, 255 )', { a: 0.5 } ); // => 'rgb( 255, 255, 255, 0.5 )'
```

## Functions

| Create        | Get <sub>channel</sub>    | Get <sub>more</sub>     | Edit <sub>channel</sub>           | Edit <sub>more</sub> |
| ------------- | ------------------------- | ----------------------- | --------------------------------- | -------------------- |
| [hex](#hex)   | [channel](#channel)       | [luminance](#luminance) | [saturate](#saturate)             | [adjust](#adjust)    |
| [rgb](#rgb)   | [red](#red)               | [isDark](#isdark)       | [desaturate](#desaturate)         | [change](#change)    |
| [rgba](#rgba) | [green](#green)           | [isLight](#islight)     | [lighten](#lighten)               | [invert](#invert)    |
| [hsl](#hsl)   | [blue](#blue)             |                         | [darken](#darken)                 | [mix](#mix)          |
| [hsla](#hsla) | [hue](#hue)               |                         | [opacify](#opacify)               | [scale](#scale)      |
|               | [saturation](#saturation) |                         | [fadeIn](#fadein)                 |                      |
|               | [lightness](#lightness)   |                         | [transparentize](#transparentize) |                      |
|               | [alpha](#alpha)           |                         | [fadeOut](#fadeout)               |                      |
|               | [opacity](#opacity)       |                         | [rgba](#rgba)                     |                      |
|               |                           |                         | [complement](#complement)         |                      |
|               |                           |                         | [grayscale](#grayscale)           |                      |

//TODO: Write documentation
//TODO: Use each method's description in tests instead of "works"

### Create

These functions create a new color given the provided channels.

#### `hex`
#### `rgb`
#### `rgba`

Creates a new color given its rgba channels.

#### `hsl`
#### `hsla`

Creates a new color given its hsla channels.

### Get <sub>channel</sub>

These functions get a single channel from the provided color.

#### `channel`

Gets any single channel of the color.

#### `red`

Gets the red channel of the color.

#### `green`

Gets the green channel of the color.

#### `blue`

Gets the blue channel of the color.

#### `hue`

Gets the hue channel of the color.

#### `saturation`

Gets the saturation channel of the color.

#### `lightness`

Gets the lightness channel of the color.

#### `alpha`

Gets the alpha channel of the color.

#### `opacity`

### Get <sub>more</sub>

These functions get some other information from the provided color.

#### `luminance`

Gets the [relative luminance](https://en.wikipedia.org/wiki/Relative_luminance) of the color.

#### `isDark`

Checks if the provided color is a dark color.

#### `isLight`

Checks if the provided color is a light color.

### Edit <sub>channel</sub>

These functions change a single channel of the provided color.

#### `saturate`

Increases the saturation channel of the color.

#### `desaturate`

Decreases the saturation channel of the color.

#### `lighten`

Increases the lightness channel of the color.

#### `darken`

Decreases the lightness channel of the color.

#### `opacify`

Increases the opacity channel of the color.

#### `fadeIn`

#### `transparentize`

Decreases the opacity channel of the color.

#### `fadeOut`

#### `rgba`

Sets a new value for the opacity channel.

#### `complement`

Gets the complement of the color, rotating its hue channel by 180 degrees.

#### `grayscale`

Gets the grayscale version of the color, setting its saturation to 0.

### Edit <sub>more</sub>

These functions can/will change more than a single channel at once of the provided color.

#### `adjust`

Increases or decreases the value of any channel of the color.

#### `change`

Sets a new value for any channel of the color.

#### `invert`

Gets the inverse of the color.

#### `mix`

Mixes two colors together.

#### `scale`

Scales any channel of the color.

## License

MIT © Fabio Spampinato, Andrew Maney

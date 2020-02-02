# SASS.js //TODO: Find new name

A port of SASS' functions for manipulating colors. //TODO: Update description

## Install

```sh
npm install --save sass.js
```

## Usage

//TODO

## Functions

//TODO: Write documentation
//TODO: Use each method's description in tests instead of "works"

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

### Create

These functions create a new color from the provided channels.

#### `hex`
#### `rgb`
#### `rgba`
#### `hsl`
#### `hsla`

### Get <sub>channel</sub>

These functions retrieve a single channel from the provided color.

#### `channel`
#### `red`
#### `green`
#### `blue`
#### `hue`
#### `saturation`
#### `lightness`
#### `alpha`
#### `opacity`

### Get <sub>more</sub>

These functions retrieve some other information from the provided color.

#### `luminance`
#### `isDark`
#### `isLight`

### Edit <sub>channel</sub>

These functions change a single channel of the provided color.

#### `saturate`
#### `desaturate`
#### `lighten`
#### `darken`
#### `opacify`
#### `fadeIn`
#### `transparentize`
#### `fadeOut`
#### `rgba`
#### `complement`
#### `grayscale`

### Edit <sub>more</sub>

These functions can change more than a single channel at once of the provided color.

#### `adjust`
#### `change`
#### `invert`
#### `mix`
#### `scale`

## License

MIT © Fabio Spampinato, Andrew Maney

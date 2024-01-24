# RGBYK Color System

The RGBYK Color System is a comprehensive color model system designed to generate a full range of accessible color palettes and utility classes from a single color. It offers a variety of advanced functions to analyze and determine color temperature, contrast, and more for design system automation.

## Why Use RGBYK Color System?

The RGBYK Color System was developed as part of a research project on web accessibility for visual disabilities, but it can be used by anyone looking to create a comprehensive color system for their web or app development project. With RGBYK, you can:

- Create fully documented color systems for easy integration into web or app development.
- Generate a suite of utility classes with customizable CSS custom properties (variables) or HEX values.
- Switch between RGB/RYB color modes.
- Establish color relationships for harmonious color schemes.
- Neutralize colors to create a "neutral-tone" palette to complement chromatic colors.
- Establish similar color temperature conditions in grayscale palettes.

## Examples of Use Cases
- Creating a consistent color palette across a website or app.
- Automatically generating utility classes for text color, background color, and border color.
- Generating accessible color palettes for users with color vision deficiencies.
- Creating a cohesive color scheme for a brand or product.

## Key Features
- Avaialble as CLI tool, NPM package
- Create fully documented color systems for easy integration into web or app development.
- Generate a suite of utility classes with customizable CSS custom properties (variables) or HEX values.
- Switch between RGB/RYB color modes.
- Establish color relationships for harmonious color schemes.
- Neutralize colors to create a "neutral-tone" palette to complement chromatic colors.
- Establish similar color temperature conditions in grayscale palettes.

## Toggling Features
- Complementary, Analogous, Square, Split, Triaddic, and Tetradic color palettes.
- Web accessibility features for color blindness, including Protanopia, Protanomaly, Deuteranopia, Deuteranomaly, Tritanopia, Tritanomaly, Achromatopsia, and Achromatomaly.
- High-pitch color toggles for optimal contrast.
- Alert palette to indicate status (e.g., error, warning, success).
- Utility classes (e.g., .bg-, .border-, color-*).

[Visual Demo & API](https://rgbyk.com/color/)

Please note that `@rgbyk/color` is currently being upgraded to use Dart-Sass. More advanced functions and updated documentation will be made available as the branch is merged.

----

## Get Started

### Requirements
- [Node.js](https://nodejs.org/) v19.0.0
- [DartSASS](https://sass-lang.com/dart-sass) v1.26.0 (compiled with dart2js 2.7.1)

## Installation

You can install `@rgbyk/color` anywhere using NPM:

```shell
$ npm i @rgbyk/color --save-dev
```

Alternatively, you can install it as a standalone package using the following command:

```shell
# Run checks and complete installation
$ npm run rgbyk-unpack
```

## `RGBYKCOLOR` Class

The `RGBYKCOLOR` class offers a suite of methods to dynamically control and update SASS variables within a configuration file. This flexibility facilitates the customization of color schemes and settings directly from Node.js, enhancing the development workflow for styling.

### Methods
All methods in the `RGBYKCOLOR` class are synchronous and directly update the SASS configuration file.

- `updateColor(hex)`: Updates the primary color of the color system
- `updateColorModel(model)` (string): Switches between `RGB` and `RYB` color models.
- `generateColorScheme()`: Generates a color scheme based on the current color model.
- `compileSass()`: Compiles SASS using Dart Sass, useful for converting SASS to CSS.
- `copyFiles(outputPath)`: Copies generated files to the specified output path.
- `outputPath` (string): The destination path where the compiled files will be copied.

### Basic Example

```
const RGBYKCOLOR = require('./class/index.js');

const colorGen = new RGBYKCOLOR();

// Update the brand color and other configurations
colorGen.updateColorAndConfig('#0ae448', {
  colorMode: 'all',
  colorModeHarmony: true,
  colorModeHarmonyGrayscale: false,
  colorModeHarmonyGrayscaleCoolMix: '3%',
  colorModeHarmonyGrayscaleWarmMix: '1%',
  colorSchemeAchromatic: true,
});

// Compile SCSS with the new configuration
colorGen.compileSCSS();
colorGen.compileDocumentationSass(); // Add this line

// Post-process with PostCSS
colorGen.postProcessWithPostCSS(`./dist/color-${colorGen.colorModel}.css`);
```

### Setting Color

```node
const RGBYKCOLOR = require('./cli/index.js');
const colorGen = new RGBYKCOLOR();

colorGen.updateColor('#ff5733');
```

### Color Models
`colorGen.updateColorModel('ryb'); // or 'rgb'`

### Color Harmony
Set a color harmony across all generated schemes:
- `setColorModeHarmony(boolean)` - Sets color harmony mode for all color schemes

Sets the cool or warm mix percentage for the grayscale in the color harmony mode.
- `setColorModeHarmonyGrayscale(boolean)`: Enables or disables color harmony for grayscale colors
- `setColorModeHarmonyGrayscaleCoolMix(value)`: (string): Sets the percentage of mixing for cool grayscale colors in string format (e.g., '3%')
- `setColorModeHarmonyGrayscaleWarmMix(value)`: (string): Sets the percentage of mixing for warm grayscale colors in string format (e.g., '1%')

Example:

```node
const RGBYKCOLOR = require('./cli/index.js');

const colorGen = new RGBYKCOLOR();

colorGen.setColorModeHarmonyGrayscale('true');
colorGen.setColorModeHarmonyGrayscaleCoolMix('5%');
colorGen.setColorModeHarmonyGrayscaleWarmMix('2%');
colorGen.setColorSchemeAchromatic('true');
```

### Color Schemes (Primaries)
`setColorSchemeX(bool)` (e.g., `setColorSchemeAchromatic(bool)`):

- `setColorSchemeAchromatic(bool)` - generates a grayscale color scheme
- `setColorSchemeSlate(bool)` - generates a cool grayscale color scheme
- `setColorSchemeStone(bool)` - generates a warm grayscale color scheme
- `setColorSchemeComplementary(bool)` - generates the complementary color scheme
- `setColorSchemeAnalogous(bool)` - generates the analogous color scheme
- `setColorSchemeSplit(bool)` - generates the split color scheme
- `setColorSchemeSquare(bool)` - generates the square color scheme
- `setColorSchemeTetradic(bool)` - generates the tetradic color scheme
- `setColorSchemeTriadic(bool)` - generates the triadic color scheme
- `setColorSchemeHues(bool)` - generates the hue (1-12) color scheme 

### Color Schemes (UI Color)
- `setColorSchemeDanger(bool)` - generates the danger color scheme
- `setColorSchemeWarning(bool)` - generates the warning color scheme
- `setColorSchemeInfo(bool)` - generates the info color scheme
- `setColorSchemeSuccess(bool)` - generates the success color scheme

### Color Scheme (Options)
- `setColorSchemeAlpha(bool)` - generates the `r, g, b` value for all enabled color schemes
- `setColorSchemeNeutral(bool)` - generates the neutral version of all enabled color schemes

- `setColorSchemeEqual(bool)` - *experimental* generates the equalized version of all enabled color schemes
- `setColorSchemePastel(bool)` - *experimental* generates the pastel version of all enabled color scheme

## CLI

`@rgbyk/color` comes with several CLI commands that you can use to compile SCSS files. These include:

### `cli.color`
This command compiles `./src/scss/color.scss`:

```shell
$ npm run color
```

### `cli.color-rgb`
This command compiles `./src/scss/color-rgb.scss`:

```shell
$ npm run color-rgb
```

### `cli.color-ryb`
This command compiles `./src/scss/color-ryb.scss`:

```shell
$ npm run color-rgb
```

----

## API Documentation

### Basic Usage
```scss
@use "../path/to/config" with (
    $brand-color: #432dd9,
    $color-model: ryb,
    $color-mode-harmony: true
);

@use "../path/to/functions";
@use "../path/to/schemes";
@use "../path/to/utilities";
```

## Advanced Usage
### Color Calculation
- `cs.calc.calc-luminance($color)` // calculate the luminance for a color.
- `cs.calc.calc-contrast($back, $front)` // calculate the contrast ratio between two colors.
- `cs.calc.calc-brightness($color)` // calculate brightness of a given color.

### Color Detection
- `is-color-grayscale($color)` // determine if color is grayscale
- `is-color-cool($color)` // determine if color is "cool" or "warm"
- `is-color-high-key-value($color)` // determine if color is high key value
- `is-color-dark($color)` // determine if a color is dark (based on lightness and hue)

### Color Modification
- `make-color-harmony($mix, $base)` // establish similar light conditions between two colors
- `make-color-harmony-grayscale($color)` // establish color relationship in your grayscale palette.
- `make-color-neutral($color)` // convert a color to its neutral form
- `make-color-mono($color, $weight)` // establish monochromatic scaling using the $chroma/$value system
- `make-color-pastel($color)` // convert a color to its pastel form
- `get-color-contrast($color)` // determine whether to use dark or light text on top of given color
- `color-mix($color1, $color2, $percent, $model)` // mix two colors by percent in a color color model.
- `find-hue-ryb($degree);` // return the degree of rgb color in ryb
- `adjust-hue-ryb($color, $degrees);` // return a color with adjusted hue
- `set-hue-ryb($color, $degree)` // set a new hue in the ryb model
- `complement-ryb($color)` // return the complement of a color in ryb
- `invert-ryb($color)` // return the inverse of a color in ryb
- `color-tint($color, $percent)` // mix a color with white to reduces darkness
- `color-shade($color, $percent)` // mix a color with black to increases darkness
- `color-tone($color, $percent)` // add percentage of grey to a color
- `color-equalize($color)` // equalize a given color

---

### Color Model
`$color-model: rgb; // [rgb | ryb]`

### Color Harmony

These variables are used to customize the behavior of the color generation. The `@forward` rule allows you to use the core code from the package while forwarding the passed variables.

- The `color-model` variable determines whether the color model used will be `RGB` or `RYB`.
- The `color-mode-harmony` variable determines whether the colors generated will have a color harmony.
- The `color-mode-harmony-grayscale` variable determines whether a color harmony is applied to the grayscale colors.
- The `color-mode-harmony-grayscale-cool-mix` variable determines the percentage of mixing if the primary color is cool.
- The `color-mode-harmony-grayscale-warm-mix` variable determines the percentage of mixing if the primary color is warm.

```scss
// Enable or disable color harmony
$color-mode-harmony: false; // [true | false], create harmony in color scheme

// Enable or disable color harmony in grayscale
$color-mode-harmony-grayscale: false; // [true | false], create harmony in grayscale scheme

// Set the percentage mix for cool and warm colors in grayscale mode
$color-mode-harmony-grayscale-cool-mix: 3%; // [integer], the % amount to mix if primary is cool
$color-mode-harmony-grayscale-warm-mix: 2%; // [integer], the % amount to mix if primary is warm
```

### Color Accessibility (CVD)
To ensure better accessibility for users with color vision deficiencies, the `$color-mode-cvd` variable can be used to simulate different types of color vision deficiencies. By default, this feature is disabled (`$color-mode-cvd: false`), but it can be enabled by setting this variable to one of the following values:

- `"protanopia"`: A type of red-green color blindness that affects the ability to distinguish between red and green hues.
- `"protanomaly"`: A milder form of protanopia that still affects the ability to distinguish between red and green hues, but to a lesser extent.
- `"deuteranopia"`: Another type of red-green color blindness that affects the ability to distinguish between red and green hues, but with a different mechanism than protanopia.
- `"deuteranomaly"`: A milder form of deuteranopia that still affects the ability to distinguish between red and green hues, but to a lesser extent.
- `"tritanopia"`: A type of blue-yellow color blindness that affects the ability to distinguish between blue and yellow hues.
- `"tritanomaly"`: A milder form of tritanopia that still affects the ability to distinguish between blue and yellow hues, but to a lesser extent.
- `"achromatopsia"`: A complete absence of color vision, also known as monochromacy.
- `"chromatomaly"`: A general term for any type of color vision deficiency that affects the ability to distinguish between hues.

```scss
// Enable or disable color vision deficiency (CVD) simulation
$color-mode-cvd: false;

// Set the type of CVD simulation to apply
$color-mode-cvd: "protanopia";
$color-mode-cvd: "protanomaly";
$color-mode-cvd: "deuteranopia";
$color-mode-cvd: "deuteranomaly";
$color-mode-cvd: "tritanopia";
$color-mode-cvd: "tritanomaly";
$color-mode-cvd: "achromatopsia";
$color-mode-cvd: "chromatomaly";
```

### Color Schemes

```scss
$color-scheme-primary: true; // [true | false] => primary scheme
$color-scheme-achromatic: true; // [true | false] => achromatic scheme
$color-scheme-analogous: false; // [true | false] => analogous scheme
$color-scheme-complementary: false; // [true | false] => complementary scheme
$color-scheme-hues: false; // [true | false] => hue scheme
$color-scheme-split: false; // [true | false] => split scheme
$color-scheme-square: false; // [true | false] => split scheme
$color-scheme-tetradic: false; // [true | false] => tetradic scheme
$color-scheme-triadic: false; // [true | false] => triadic scheme
```

### Color Schemes (Alert)
These schemes can be useful to reflect the status of user interface components, such as error, warning, success, and info. The available options include `$color-scheme-danger`, `$color-scheme-warning`, `$color-scheme-success`, and `$color-scheme-info`. Each option can be set to `true` or `false` to enable or disable the corresponding scheme.

```scss
$color-scheme-danger: false; // [true | false] => danger scheme
$color-scheme-warning: false; // [true | false] => warning scheme
$color-scheme-success: false; // [true | false] => success scheme
$color-scheme-info: false; // [true | false] => info scheme
```

### Color Schemes (Misc).
```scss
$color-scheme-neutral: false; // [true | false] => neutral palette
$color-scheme-pastel: false; // [true | false] => pastel palette
$color-scheme-alpha: false; // [true | false] => alpha palette
```

### Color Utilities

- `$enable-utility-classes` - Enables or disables all the utility classes. Default value is true.
- `$enable-utility-bg` - Enables or disables background-related utility classes (`.bg-`). Default value is true.
- `$enable-utility-color` - Enables or disables text color-related utility classes (`.color-). Default value is true.
- `$enable-utility-border` - Enables or disables border-related utility classes (`.border-). Default value is true.
- `$enable-utility-fill` - Enables or disables fill-related utility classes (`.fill-`). Default value is false.
- `$enable-utility-stroke` - Enables or disables stroke-related utility classes (`.stroke-`). Default value is false.

```scss
$enable-utility-classes: true; // [true | false] => _all_ utilities
$enable-utility-bg: true; // [true | false] => `.bg-` classes
$enable-utility-color: true; // [true | false] => `.color-` classes
$enable-utility-border: true; // [true | false] => `.border-` classes
$enable-utility-fill: false; // [true | false] => `.fill-` classes
$enable-utility-stroke: false; // [true | false] => `.stroke-` classes
```

### Code Output
```scss
$enable-root-colors: true;
// set `true` for => `var(--black)`
// set `false` for => `#000000`
```

---

## Resources

### Color Spaces
- [Munsell color system](https://en.wikipedia.org/wiki/Munsell_color_system)
- [Pantone matching system (pms)](https://en.wikipedia.org/wiki/Pantone)
- [Natural color system (ncs)](https://en.wikipedia.org/wiki/Natural_Color_System)

### Color Models
- [RYB color model](https://en.wikipedia.org/wiki/RYB_color_model)
- [RGB color model](https://en.wikipedia.org/wiki/RGB_color_model)
- [RGBA color model](https://en.wikipedia.org/wiki/RGBA_color_model)

### Color Schemes
- [Color schemes](https://en.wikipedia.org/wiki/Color_scheme)
- [Monochromatic](http://www.paletton.com/wiki/index.php?title=Monochromatic_color_scheme)
- [Complementary](http://www.paletton.com/wiki/index.php?title=Complementary_color_scheme)
- [Split-complementary](http://www.paletton.com/wiki/index.php?title=Split-complementary_color_scheme)
- [Split-complementary (accented)](http://www.paletton.com/wiki/index.php?title=Split-complementary_color_scheme_(accented))
- [Triadic color scheme](http://www.paletton.com/wiki/index.php?title=Triadic_color_scheme)
- [Analogous](http://www.paletton.com/wiki/index.php?title=Analogous_color_scheme)
- [Analogous (accented)](http://www.paletton.com/wiki/index.php?title=Analogous_color_scheme_(accented))
- [Dual](http://www.paletton.com/wiki/index.php?title=Dual_color_scheme)
- [Tetradic](http://www.paletton.com/wiki/index.php?title=Tetradic_color_scheme)

### Accessibility
- [Designing for (and with) color blindness](https://medium.com/@aaron10buuren/designing-for-and-with-color-blindness-48392aab3d87)
- [Accessible color contrast](http://www.w3.org/TR/AERT#color-contrast)

### Approach
- [Practical color theory for people who code](https://tallys.github.io/color-theory/)
- [Math based color theory](https://www.ethangardner.com/articles/2009/03/15/a-math-based-approach-to-color-theory-using-hue-saturation-and-brightness-hsb/)

### Misc.
- [Understanding different color modes](https://helpx.adobe.com/photoshop/using/color-modes.html)
- [Establishing color harmony](https://en.wikipedia.org/wiki/Harmony_(color)#Relationship)
- [Color space](https://en.wikipedia.org/wiki/Color_space)
- [Rgb color space](https://en.wikipedia.org/wiki/RGB_color_space)
- [Cielab color space](https://en.wikipedia.org/wiki/CIELAB_color_space)
- [Color spaces with rgb primaries](https://en.wikipedia.org/wiki/Color_spaces_with_RGB_primaries)
- [Web safe colors](https://www.rapidtables.com/web/color/Web_Safe.html)
- [Complementary colors](https://en.wikipedia.org/wiki/Complementary_colors)

### Tools
- [Adobe color](https://color.adobe.com/)
- [Color picker](https://htmlcolorcodes.com/color-picker/)

### Books
- [Color, archives by mark andrea](https://archive.org/details/@mark_andrea?and[]=subject%3A%22Color%22)
- [Field's chromatography, 1835](https://archive.org/details/gri_c00033125008687523/page/n96/mode/thumb)
- [Field's chromatography, 1854](https://archive.org/details/Fieldquotschrom00Fiel/page/i/mode/2up)

----

## Support
If you don't find the answer to your problem in the documentation, or have a suggestion for improvements, submit your question [here](https://github.com/rgbyk/color/issues).

----

## License
see the [LICENSE](LICENSE) file for details.

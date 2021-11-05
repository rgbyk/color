# @rgbyk/color

A color model system that generates a full range of accessible color palettes, and utility classes from a single color.

[View simulator](https://rgbyk.com/color/)

-- 

You can view the generated color schemes by visiting `./demo/[rgb|ryb].html`
Please note that documentation for `v1.4.6` are in development and will be released shortly.

----

## Command Line

### Requirements
- [Node.js](https://nodejs.org/) v12.11.0
- [SASS](https://sass-lang.com/dart-sass) v1.26.0 (compiled with dart2js 2.7.1)

### Install anywhere (npm)
```shell
$ npm i @rgbyk/color --save-dev
```

### Install anywhere (standalone)
Install anywhere (standalone)

```shell
# run checks and full installation
$ npm run rgbyk-unpack
```

### cli.color
```shell
# compile `./src/scss/color.scss`
$ npm run color
```

### cli.color-rgb
```shell
# compile `./src/scss/color-rgb.scss`
$ npm run color-rgb
```

### cli.color-ryb
```shell
# compile `./src/scss/color-ryb.scss`
$ npm run color-rgb
```

----

## API

### Example (npm)
```scss
@forward "@rgbyk/color/src/scss/core" with (
    $brand-color: #432dd9,
    $color-model: ryb,
    $color-mode-harmony: true
);

@use "../../node_modules/@rgbyk/color/src/scss/functions";
@use "../../node_modules/@rgbyk/color/src/scss/schemes";
@use "../../node_modules/@rgbyk/color/src/scss/utilities";
```

### Color Model
```scss
$color-model: rgb; // [rgb | ryb]
```

### Color Harmony
```scss
$color-mode-harmony: false; // [true | false], create harmony in color scheme
$color-mode-harmony-grayscale: false; // [true | false], create harmony in grayscale scheme
$color-mode-harmony-grayscale-cool-mix: 3%; // [integer], the % amount to mix if primary is cool
$color-mode-harmony-grayscale-warm-mix: 2%; // [integer], the % amount to mix if primary is warm
```

### Color Accessibility
```scss
$color-mode-cvd: false;
$color-mode-cvd: "protanopia";
$color-mode-cvd: "protanomaly";
$color-mode-cvd: "deuteranopia";
$color-mode-cvd: "deuteranomaly";
$color-mode-cvd: "tritanopia";
$color-mode-cvd: "tritanomaly";
$color-mode-cvd: "achromatopsia";
$color-mode-cvd: "chromatomaly";
```

### Color Utilities
```scss
$enable-utility-classes: true; // [true | false] => _all_ utilities
$enable-utility-bg: true; // [true | false] => `.bg-` classes
$enable-utility-color: true; // [true | false] => `.color-` classes
$enable-utility-border: true; // [true | false] => `.border-` classes
$enable-utility-fill: false; // [true | false] => `.fill-` classes
$enable-utility-stroke: false; // [true | false] => `.stroke-` classes
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

### Code Output
```scss
$enable-root-colors: true;
// set `true` for => `var(--black)`
// set `false` for => `#000000`
```

----

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

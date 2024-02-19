const RGBYKCOLOR = require('./app/index.js');

const colorGen = new RGBYKCOLOR();

// 'palettes' => [
//     '#FFD600',
//     '#FF5100',
//     '#FF0069',
//     '#D300C5',
//     '#7638FA',
//     '#007bff',
//     '#9454f4',
//     '#607d8b',
// ],

// Update the brand color and other configurations
colorGen.updateColorAndConfig('#f56040', {
  colorMode: 'all',
  colorModeHarmony: true,
  colorModeHarmonyGrayscale: true,
  // colorModeHarmonyGrayscaleCoolMix: '3%',
  // colorModeHarmonyGrayscaleWarmMix: '2%',
  colorSchemeAchromatic: true,
});

// Compile SCSS with the new configuration
colorGen.compileSCSS();
colorGen.compileDocumentationSass(); // Add this line

// Post-process with PostCSS
colorGen.postProcessWithPostCSS(`./demo/assets/css/color.css`);
// colorGen.postGenerateActions('./demo');
colorGen.generateHarmonizedFiles();

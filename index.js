const RGBYKCOLOR = require('./app/index.js');

const colorGen = new RGBYKCOLOR();

// Update the brand color and other configurations
colorGen.updateColorAndConfig('#0ae448', {
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

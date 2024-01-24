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
// colorGen.postGenerateActions('./demo');
colorGen.generateHarmonizedFiles();

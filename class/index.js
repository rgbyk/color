const fs = require('fs');
const { execSync, spawnSync } = require('child_process'); // Import spawnSync
const path = require('path');

class RGBYKCOLOR {
  constructor(configPath = './src/scss/config.scss', outputPath = './dist') {
    this.configPath = configPath;
    this.defaultConfig = fs.readFileSync(configPath, 'utf8');
    this.outputPath = outputPath;
    this.colorModel = 'rgb';
  }

  // Helper method for executing shell commands
  executeCommand(command, errorMessage) {
    try {
      execSync(command, { stdio: 'inherit', shell: true });
    } catch (error) {
      console.error(errorMessage || `Error executing command: ${error.message}`);
      throw error;
    }
  }

  // Update Color and Configuration
  updateColorAndConfig(newColor, otherConfigValues) {
    try {
      // Update the SCSS configuration file with newColor and otherConfigValues
      const updatedConfig = this.defaultConfig.replace(/(\$brand-color:\s*).+;/, `$1${newColor};`);
      // Apply other configuration updates here if needed
      fs.writeFileSync(this.configPath, updatedConfig, 'utf8');
      
      // Add console logs to verify the process
      console.log(`Updated ${this.configPath} with HEX color: ${newColor}`);
      console.log(`New content of ${this.configPath}:\n${updatedConfig}`);
    } catch (error) {
      console.error(`Error updating color and configuration: ${error.message}`);
    }
  }// Compile SCSS
compileSCSS(colorModel = 'all') {
  try {
    const rgbSassCommand = `sass ./src/scss/color.scss ${this.outputPath}/color.css --no-source-map --charset`;
    this.executeCommand(rgbSassCommand, 'Sass compilation failed', '\x1b[36mSass Success\x1b[0m');
  } catch (error) {
    console.error(`Error compiling SCSS: ${error.message}`);
  }
}
// Post-process with PostCSS
postProcessWithPostCSS(inputCSSFile, colorModel = 'all') {
  try {

      // Check if the RYB CSS file exists
      if (fs.existsSync(`${this.outputPath}/color.css`)) {
        const PostCSSCommand = [
          path.join(__dirname, '..', 'node_modules', '.bin', 'postcss'), // Specify postcssBinaryPath
          `${this.outputPath}/color.css`,
          '-o',
          `${this.outputPath}/color.min.css`,
        ];
        spawnSync(PostCSSCommand[0], PostCSSCommand.slice(1), { stdio: 'inherit' });
      }

  } catch (error) {
    console.error(`Error post-processing with PostCSS: ${error.message}`);
  }
}



// Compile Documentation Sass
compileDocumentationSass(colorModel = 'all') {
  try {
      const DocsCommand = `sass ./src/scss/docs/color.scss ./demo/color.docs.css --no-source-map --style compressed --charset`;
      this.executeCommand(DocsCommand, 'Documentation Sass compilation failed', '\x1b[36mDocumentation Sass Success\x1b[0m');

    console.log('Documentation Sass compiled successfully');
  } catch (error) {
    console.error(`Error compiling Documentation Sass: ${error.message}`);
  }
}

// Generate Harmonized Files
generateHarmonizedFiles(colorModel = 'all') {
  try {
    const demoPath = './demo/';
    
    const DocsCommand = `sass ./src/scss/docs/color.scss ${demoPath}/color.docs.css --no-source-map --style compressed --charset`;
    const DocsHarmonizedCommand = `sass ./src/scss/docs/color.harmonized.scss ${demoPath}/color.harmonized.docs.css --no-source-map --style compressed --charset`;

    this.executeCommand(DocsCommand, 'RGB Documentation Sass compilation failed', '\x1b[36mRGB Documentation Sass Success\x1b[0m');
    this.executeCommand(DocsHarmonizedCommand, 'RGB Harmonized Documentation Sass compilation failed', '\x1b[36mRGB Harmonized Documentation Sass Success\x1b[0m');    

    console.log('Documentation files generated successfully');
  } catch (error) {
    console.error(`Error generating harmonized files: ${error.message}`);
  }
}

// Generate Color Scheme (Optional)
generateColorScheme() {
  try {
    // Optionally, generate the color scheme
    // This method can call the other methods in the desired order
  } catch (error) {
    console.error('\x1b[91mError generating color scheme:\x1b[0m', error.message);
  }
}

postGenerateActions(outputPath) {
  try {
    const demoPath = './demo/';
    const compiledFilePath = `${outputPath}/color-${this.colorModel}.css`;

    this.copyFile(compiledFilePath, `${demoPath}/color-${this.colorModel}.css`);

    const sassDocsCommand = `sass ./src/scss/docs/color-${this.colorModel}.scss ${demoPath}/color-${this.colorModel}.docs.css --no-source-map --style compressed --charset`;
    this.executeCommand(sassDocsCommand, 'Documentation Sass compilation failed', '\x1b[36mSuccess\x1b[0m');

    console.log('\x1b[36mCopied and compiled demo files to\x1b[0m', `${demoPath}`);
    console.log('\x1b[36mCompiled\x1b[0m', `${this.colorModel} documentation Sass file`);
  } catch (error) {
    console.error('\x1b[91mError performing post-generate actions:\x1b[0m', error.message);
  }
}


  copyFile(sourceFile, destinationPath) {
    try {
      // Normalize the destination path to remove extra slashes
      destinationPath = path.normalize(destinationPath);

      // Create the output directory if it doesn't exist
      if (!fs.existsSync(path.dirname(destinationPath))) {
        fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
      }

      fs.copyFileSync(sourceFile, destinationPath);
      console.log(`Copied ${sourceFile} to ${destinationPath}`);
    } catch (error) {
      console.error(`Error copying file: ${error.message}`);
      throw error;
    }
  }

  updateConfigVariable(variableName, value) {
    try {
      const variableRegex = new RegExp(`(\\$${variableName}:\\s*).+;`, 'i');
      this.defaultConfig = this.defaultConfig.replace(variableRegex, `$1${value};`);
      fs.writeFileSync(this.configPath, this.defaultConfig, 'utf8');
    } catch (error) {
      console.error(`Error updating config variable: ${error.message}`);
    }
  }

  // Color Harmony
  setColorModeHarmony(bool) {
    this.updateConfigVariable('color-mode-harmony', bool);
  }

  setColorModeHarmonyGrayscale(bool) {
    this.updateConfigVariable('color-mode-harmony-grayscale', bool);
  }

  setColorModeHarmonyGrayscaleCoolMix(value) {
    this.updateConfigVariable('color-mode-harmony-grayscale-cool-mix', value);
  }

  setColorModeHarmonyGrayscaleWarmMix(value) {
    this.updateConfigVariable('color-mode-harmony-grayscale-warm-mix', value);
  }

  // Color Schemes
  setColorSchemeAchromatic(bool) {
    this.updateConfigVariable('color-scheme-achromatic', bool);
  }

  setColorSchemeSlate(bool) {
    this.updateConfigVariable('color-scheme-slate', bool);
  }

  setColorSchemeStone(bool) {
    this.updateConfigVariable('color-scheme-stone', bool);
  }

  setColorSchemeComplementary(bool) {
    this.updateConfigVariable('color-scheme-complementary', bool);
  }

  setColorSchemeAnalogous(bool) {
    this.updateConfigVariable('color-scheme-analogous', bool);
  }

  setColorSchemeSplit(bool) {
    this.updateConfigVariable('color-scheme-split', bool);
  }

  setColorSchemeSquare(bool) {
    this.updateConfigVariable('color-scheme-square', bool);
  }

  setColorSchemeTetradic(bool) {
    this.updateConfigVariable('color-scheme-tetradic', bool);
  }

  setColorSchemeTriadic(bool) {
    this.updateConfigVariable('color-scheme-triadic', bool);
  }

  setColorSchemeHues(bool) {
    this.updateConfigVariable('color-scheme-hues', bool);
  }

  setColorSchemeDanger(bool) {
    this.updateConfigVariable('color-scheme-danger', bool);
  }

  setColorSchemeWarning(bool) {
    this.updateConfigVariable('color-scheme-warning', bool);
  }

  setColorSchemeSuccess(bool) {
    this.updateConfigVariable('color-scheme-success', bool);
  }

  setColorSchemeInfo(bool) {
    this.updateConfigVariable('color-scheme-info', bool);
  }

  setColorSchemeAlpha(bool) {
    this.updateConfigVariable('color-scheme-alpha', bool);
  }

  setColorSchemeEqual(bool) {
    this.updateConfigVariable('color-scheme-equal', bool);
  }

  setColorSchemeNeutral(bool) {
    this.updateConfigVariable('color-scheme-neutral', bool);
  }

  setColorSchemePastel(bool) {
    this.updateConfigVariable('color-scheme-pastel', bool);
  }

  // Class Utilities
  setUtilityClasses(bool) {
    this.updateConfigVariable('enable-utility-classes', bool);
  }

  setUtilityBackground(bool) {
    this.updateConfigVariable('enable-utility-bg', bool);
  }

  setUtilityColor(bool) {
    this.updateConfigVariable('enable-utility-color', bool);
  }

  setUtilityBorder(bool) {
    this.updateConfigVariable('enable-utility-border', bool);
  }

  setUtilityFill(bool) {
    this.updateConfigVariable('enable-utility-fill', bool);
  }

  setUtilityStroke(bool) {
    this.updateConfigVariable('enable-utility-stroke', bool);
  }
}

module.exports = RGBYKCOLOR;

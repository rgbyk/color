#!/usr/bin/env node

// #######################################################################
// ## @rgbyk/color/bin/modules/color-rgb-cli.js
// #######################################################################

const { exec } = require('child_process')
const [,, ... args] = process.argv

exec(`sass ./src/scss/color-rgb.scss ${args} --no-source-map --charset --style=compressed && postcss ${args} ${args}`);
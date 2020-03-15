#!/usr/bin/env node

const { exec } = require('child_process')
const [,, ... args] = process.argv

exec(`sass ./src/scss/color-ryb.scss ${args} --no-source-map --charset --style=compressed && postcss ${args} ${args}`);
#!/bin/sh

#######################################################################
## CONFIG
#######################################################################

set -e

#######################################################################
## DATA
#######################################################################

_name=$(node -p "require('./package.json').name")
_version=$(node -p "require('./package.json').version")

#######################################################################
## VARIABLES
#######################################################################

FOLDER_SRC_SCSS=$'./src/scss'
# FOLDER_SRC_JS=$'./src/scss'

NODE_MODULES=$'./node_modules'

FOLDER_DIST=$'./dist'
FOLDER_DIST_ASSETS=$'./dist/assets'
FOLDER_DIST_ASSETS_CSS=$'./dist/assets/css'
# FOLDER_DIST_ASSETS_JS=$'./dist/assets/js'
# FOLDER_DIST_ASSETS_JS_BUNDLE=$'./dist/assets/js/bundle'

# FOLDER_JEKYLL=$'./jekyll'
# FOLDER_JEKYLL_ASSETS=$'./jekyll/assets'
# FOLDER_JEKYLL_ASSETS_CSS=$'./jekyll/assets/css'
# FOLDER_JEKYLL_ASSETS_JS=$'./jekyll/assets/js'

FILE_STYLE_0=$'color'
FILE_STYLE_RYB=$'color-ryb'
FILE_STYLE_RGB=$'color-ryb'

#######################################################################
## STYLING
#######################################################################

black=$'\e[90;1m'
black_=$'\e[90;6m'
red=$'\e[91;1m'
red_=$'\e[91;6m'
green=$'\e[92;1m'
green_=$'\e[92;6m'
yellow=$'\e[93;1m'
yellow_=$'\e[93;6m'
blue=$'\e[94;1m'
blue_=$'\e[94;6m'
magenta=$'\e[95;1m'
magenta_=$'\e[95;6m'
cyan=$'\e[96;1m'
cyan_=$'\e[96;6m'
white=$'\e[97;1m'
white_=$'\e[97;6m'
reset=$'\e[0m'

bold=$'\e[1m'
reverse=$'\e[7m'
underline=$'\e[4m'
#!/bin/sh

#######################################################################
## COLOR / RGB
#######################################################################

# Usage
# 1. $ chmod 777 ./bin/lib/color-rgb
# 2. $ ./bin/lib/color-rgb
# 3. $ "color-rgb": "chmod 777 ./bin/lib/color-rgb.sh && ./bin/lib/color-rgb.sh"

set -e

# LOAD CONFIG
. ./bin/lib/config.sh

# ANNOUNCE START
echo $white_ "... $ color.sh;" $reset

# SASS $FILE_STYLE_RGB
echo $black_ "... $ sass $FILE_STYLE_RGB;" $reset
sass $FOLDER_SRC_SCSS/$FILE_STYLE_RGB.scss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB.css --no-source-map --charset --style=compressed

# POSTCSS $FILE_STYLE_RGB
echo $black_ "... $ postcss $FILE_STYLE_RGB;" $reset
postcss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB.css $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB.min.css

# ANNOUNCE END
echo $green_ "... $ color.sh;\n" $reset
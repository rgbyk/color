#!/bin/sh

#######################################################################
## @rgbyk/color/bin/lib/color-rgb.sh
#######################################################################

# 1. $ chmod +x ./bin/lib/color-rgb.sh
# 2. $ ./bin/lib/color-rgb.sh
# 3. $ "color-rgb": "chmod +x ./bin/lib/color-rgb.sh && ./bin/lib/color-rgb.sh"

set -e

. ./bin/lib/config.sh

echo $white_ "... $ color.sh;" $reset

echo $black_ "... $ sass $FILE_STYLE_RGB;" $reset
sass $FOLDER_SRC_SCSS/$FILE_STYLE_RGB.scss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB.css --no-source-map --charset

echo $black_ "... $ postcss $FILE_STYLE_RGB;" $reset
postcss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB.css -o $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB.min.css

echo $green_ "... $ color.sh;\n" $reset
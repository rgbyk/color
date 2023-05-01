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

echo $black_ "... $ sass $FILE_STYLE_RGB_DOCS;" $reset
sass $FOLDER_SRC_SCSS/docs/$FILE_STYLE_RGB_DOCS.scss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB_DOCS.docs.css --no-source-map --style compressed --charset

mv $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB_DOCS.docs.css ./demo/
cp $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RGB_DOCS.css ./demo/

echo $green_ "... $ color.sh;\n" $reset
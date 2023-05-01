#!/bin/sh

#######################################################################
## @rgbyk/color/bin/lib/color-ryb.sh
#######################################################################

# 1. $ chmod +x ./bin/lib/color-ryb.sh
# 2. $ ./bin/lib/color-ryb.sh
# 3. $ "color-ryb": "chmod +x ./bin/lib/color-ryb.sh && ./bin/lib/color-ryb.sh"

set -e

. ./bin/lib/config.sh

echo $white_ "... $ color.sh;" $reset

echo $black_ "... $ sass $FILE_STYLE_RYB;" $reset
sass $FOLDER_SRC_SCSS/$FILE_STYLE_RYB.scss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.css --no-source-map --charset

echo $black_ "... $ postcss $FILE_STYLE_RYB;" $reset
postcss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.css -o $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.min.css

echo $black_ "... $ sass $FILE_STYLE_RYB_DOCS;" $reset
sass $FOLDER_SRC_SCSS/docs/$FILE_STYLE_RYB_DOCS.scss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB_DOCS.docs.css --no-source-map --style compressed --charset

mv $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB_DOCS.docs.css ./demo/
cp $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB_DOCS.css ./demo/

echo $green_ "... $ color.sh;\n" $reset
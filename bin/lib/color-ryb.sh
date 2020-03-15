#!/bin/sh

#######################################################################
## @rgbyk/color => color-ryb.sh
#######################################################################

# 1. $ chmod +x ./bin/lib/color-ryb.sh
# 2. $ ./bin/lib/color-ryb.sh
# 3. $ "color-ryb": "chmod +x ./bin/lib/color-ryb.sh && ./bin/lib/color-ryb.sh"

set -e

. ./bin/lib/config.sh

echo $white_ "... $ color.sh;" $reset

echo $black_ "... $ sass $FILE_STYLE_RYB;" $reset
sass $FOLDER_SRC_SCSS/$FILE_STYLE_RYB.scss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.css --no-source-map --charset --style=compressed

echo $black_ "... $ postcss $FILE_STYLE_RYB;" $reset
postcss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.css -o $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.min.css

echo $green_ "... $ color.sh;\n" $reset
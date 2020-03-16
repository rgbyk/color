#!/bin/sh

#######################################################################
## @rgbyk/color/bin/lib/color.sh
#######################################################################

# 1. $ chmod +x ./bin/lib/color.sh
# 2. $ ./bin/lib/color.sh
# 3. $ "color": "chmod +x ./bin/lib/color.sh && ./bin/lib/color.sh"

set -e

# LOAD CONFIG
. ./bin/lib/config.sh

# ANNOUNCE START
echo $white_ "... $ color.sh;" $reset

# SASS $FILE_STYLE_0
echo $black_ "... $ sass $FILE_STYLE_0;" $reset
sass $FOLDER_SRC_SCSS/$FILE_STYLE_0.scss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_0.css --no-source-map --charset --style=expanded

# POSTCSS $FILE_STYLE_0
echo $black_ "... $ postcss $FILE_STYLE_0;" $reset
postcss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_0.css -o $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_0.min.css

# ANNOUNCE END
echo $green_ "... $ color.sh;\n" $reset
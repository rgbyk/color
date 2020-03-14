#!/bin/sh

#######################################################################
## COLOR / RYB
#######################################################################

# Usage
# 1. $ chmod 777 ./bin/lib/color-ryb
# 2. $ ./bin/lib/color-ryb
# 3. $ "color-ryb": "chmod 777 ./bin/lib/color-ryb.sh && ./bin/lib/color-ryb.sh"

set -e

# LOAD CONFIG
. ./bin/lib/config.sh

# ANNOUNCE START
echo $white_ "... $ color.sh;" $reset

# SASS $FILE_STYLE_RYB
echo $black_ "... $ sass $FILE_STYLE_RYB;" $reset
sass $FOLDER_SRC_SCSS/$FILE_STYLE_RYB.scss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.css --no-source-map --charset --style=compressed

# POSTCSS $FILE_STYLE_RYB
echo $black_ "... $ postcss $FILE_STYLE_RYB;" $reset
postcss $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.css $FOLDER_DIST_ASSETS_CSS/$FILE_STYLE_RYB.min.css

# ANNOUNCE END
echo $green_ "... $ color.sh;\n" $reset
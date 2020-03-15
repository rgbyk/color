#!/bin/sh

#######################################################################
## @rgbyk/color => checks.sh
#######################################################################

# 1. $ chmod +x ./bin/lib/checks.sh
# 2. $ ./bin/lib/checks.sh

set -e

. ./bin/lib/config.sh

echo $white_ "... $ checks.sh;" $reset

if [ ! -d $FOLDER_DIST ]; then
    echo $black "... $ mkdir \`$FOLDER_DIST\`" $reset
    mkdir $FOLDER_DIST
    sleep 0.1
fi

if [ ! -d $FOLDER_DIST_ASSETS ]; then
    echo $black "... $ mkdir \`$FOLDER_DIST_ASSETS\`" $reset
    mkdir $FOLDER_DIST_ASSETS
    sleep 0.1
fi

if [ ! -d $FOLDER_DIST_ASSETS_CSS ]; then
    echo $black "... $ mkdir \`$FOLDER_DIST_ASSETS_CSS\`" $reset
    mkdir $FOLDER_DIST_ASSETS_CSS
    sleep 0.1
fi

echo $green_ "... $ checks.sh;\n" $reset
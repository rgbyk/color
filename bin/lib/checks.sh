#!/bin/sh

#######################################################################
## CHECKS
#######################################################################

# Usage
# 1. $ chmod 777 ./bin/lib/checks
# 2. $ ./bin/lib/checks
# 3. $ "checks": "chmod 777 ./bin/lib/checks.sh && ./bin/lib/checks.sh"

set -e

# LOAD CONFIG
. ./bin/lib/config.sh

# ANNOUNCE START
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

# ANNOUNCE END
echo $green_ "... $ checks.sh;\n" $reset
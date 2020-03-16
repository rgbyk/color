#!/bin/sh

#######################################################################
## @rgbyk/color/bin/lib/unpack-rgbyk.sh
#######################################################################

# 1. $ chmod +x  ./bin/lib/unpack-rgybk.sh
# 2. $ ./bin/lib/unpack-rgbyk.sh
# 3. $ "unpack-rgbyk": "chmod +x ./bin/lib/unpack.sh && ./bin/lib/unpack.sh"

set -e

chmod +x ./bin/lib/config.sh
chmod +x ./bin/lib/branding.sh
chmod +x ./bin/lib/checks.sh
chmod +x ./bin/lib/kill.sh
chmod +x ./bin/lib/color-rgb.sh
chmod +x ./bin/lib/color-ryb.sh
chmod +x ./bin/lib/color.sh

. ./bin/lib/config.sh
. ./bin/lib/branding.sh

printf "%s Do you wish to install $_name (v$_version)? %s" $white_ $reset
read answer
echo ""

if [ "$answer" != "${answer#[Yy]}" ] ;then
    echo $white_ "... $ unpack.sh;\n" $reset

    . ./bin/lib/kill.sh
    . ./bin/lib/checks.sh

    if [ -d $NODE_MODULES ]; then
        echo $black "... $ rm -r \`$NODE_MODULES\`" $reset
        rm -r $NODE_MODULES        
        sleep 1

        echo $black "... $ npm install; break;" $reset
        npm install &>/dev/null; break;
        echo ""
    else
        echo $black "... $ npm install; break;" $reset
        echo ""
        npm install &>/dev/null; break;
        echo ""
    fi

    echo $green_ "... $ unpack.sh;\n" $reset
else
    echo $black_ "... $ exit \n" $reset
fi
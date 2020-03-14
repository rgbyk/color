#!/bin/sh

#######################################################################
## UNPACK
#######################################################################

# Usage
# 1. $ chmod 777 ./bin/lib/unpack
# 2. $ ./bin/lib/unpack
# 3. $ "unpack": "chmod 777 ./bin/lib/unpack.sh && ./bin/lib/unpack.sh"

set -e

# SET PERMISSIONS
chmod +x color.sh
chmod +x color-ryb.sh
chmod +x color-rgb.sh
chmod +x kill.sh
chmod +x checks.sh
chmod +x config.sh


# LOAD CONFIG
. ./bin/lib/config.sh

# LOAD BRANDING
echo $black_ " 
██████╗  ██████╗ ██████╗ ██╗   ██╗██╗  ██╗
██╔══██╗██╔════╝ ██╔══██╗╚██╗ ██╔╝██║ ██╔╝
██████╔╝██║  ███╗██████╔╝ ╚████╔╝ █████╔╝ 
██╔══██╗██║   ██║██╔══██╗  ╚██╔╝  ██╔═██╗ 
██║  ██║╚██████╔╝██████╔╝   ██║   ██║  ██╗
╚═╝  ╚═╝ ╚═════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝"
echo ""
echo "" $reset

# PRINT Y/N
printf "%s Do you wish to install @rgbyk/$_name (v$_version)? %s" $white_ $reset
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
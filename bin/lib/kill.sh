#!/bin/sh

#######################################################################
## @rgbyk/color/bin/lib/kill.sh
#######################################################################

# 1. $ chmod +x ./bin/lib/kill.sh
# 2. $ ./bin/lib/kill.sh
# 3. $ "kill": "chmod +x ./bin/lib/kill.sh && ./bin/lib/kill.sh"

set -e

. ./bin/lib/config.sh

echo $white_ "... $ kill.sh;" $reset

ps aux | grep nodemon | awk '{print $2}' | xargs kill -9 &>/dev/null &
ps aux | grep jekyll | awk '{print $2}' | xargs kill -9 &>/dev/null &

echo $green_ "... $ kill.sh;\n" $reset
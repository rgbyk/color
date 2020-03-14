#!/bin/sh

#######################################################################
## KILL
#######################################################################

# Usage
# 1. $ chmod 777 ./bin/lib/kill
# 2. $ ./bin/lib/kill
# 3. $ "kill": "chmod 777 ./bin/lib/kill.sh && ./bin/lib/kill.sh"

set -e

# LOAD CONFIG
. ./bin/lib/config.sh

# ANNOUNCE START
echo $white_ "... $ kill.sh;" $reset

# KILL NODEMON
ps aux | grep nodemon | awk '{print $2}' | xargs kill -9 &>/dev/null &

# KILL JEKYLL
ps aux | grep jekyll | awk '{print $2}' | xargs kill -9 &>/dev/null &

# ANNOUNCE END
echo $green_ "... $ kill.sh;\n" $reset
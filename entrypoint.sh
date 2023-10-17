#!/bin/bash

#PM2 ecosystem configuration
echo "Loading configuration file."
CONFIG_FILE="ecosystem.config.js"
echo "Configuration file loaded."

#Bun building 
echo "Building by bun as interpeter"
bun build index.ts --minify > ./build/index.js
echo "File building done"

# Start container with selected config
pm2 start --name  bun-server --interpreter /usr/local/bin/bun ./build/index.js 

exec tail -f /dev/null

#!/bin/bash

echo "~> installing dependencies"

if [ ! -d /var/www/app/node_modules ]; then
  npm install
fi

if [ ! -f /var/www/app/.bin/node ]; then
  cp /usr/local/bin/node /var/www/app/.bin/node
fi

echo "~> fix permissions"
chown -R node:node .

echo "~> starting dev"

npm run dev

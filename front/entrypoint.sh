#!/bin/bash

if [[ $@ == "install" ]]; then
  yarn install
  exit 0
fi

# Run yarn install (only takes about ~1s if we are up to date)
yarn install --frozen-lockfile

# run command with exec to pass control
echo "Running CMD: $@"
exec "$@"

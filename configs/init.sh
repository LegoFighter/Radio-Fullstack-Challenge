#! /bin/bash

cd /usr/src/app
echo "Installing dependencies"
yarn install
echo "Running application"
yarn start:dev
#! /bin/sh

set -ex

npm config set //registry.npmjs.org/:_authToken $NPM_TOKEN

yarn
yarn build
yarn publish
#!/bin/bash
set -e

echo "STORYBOOK Opening project root directory..."
cd "${TRAVIS_BUILD_DIR}"

echo "STORYBOOK Fetching packages version..."
VERSION=`cat lerna.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]'n`

if [ -z "${VERSION}" ]; then
  echo "STORYBOOK Can not build Storybook. Could not find version information at lerna.json file."
  exit 0
else
  echo "STORYBOOK Generating Storybook for version ${VERSION}..."
fi

echo "STORYBOOK Creating temp directory for bundle..."
mkdir -p ../tmp

echo "STORYBOOK Opening docs package directory..."
cd "${TRAVIS_BUILD_DIR}/packages/docs"

echo "STORYBOOK Generating JSON report for Jest addon..."
yarn lerna run test:packages

echo "STORYBOOK Building Storybook..."
yarn build -o "${TRAVIS_BUILD_DIR}/../tmp/v${VERSION}" --quiet

echo "STORYBOOK Going back to project root directory..."
cd "$TRAVIS_BUILD_DIR"

echo "STORYBOOK Moving to docs branch..."
git checkout .

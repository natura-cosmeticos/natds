#!/bin/bash

BRANCH_NAME=$(bash ./.cicd/get-branch-name.sh)

FOLDER_NAME=${BRANCH_NAME//[\/]/-}
OUTPUT_PATH=build

yarn build:storybook
mkdir -p build

echo "Verifying $1"

if [ -z $1 ]; then
    OUTPUT_PATH=build/${FOLDER_NAME}
    mkdir -p ${OUTPUT_PATH}
    echo "Created ${FOLDER_NAME} folder"
fi

cp -r packages/web/docs/dist/* ${OUTPUT_PATH}
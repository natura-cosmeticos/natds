#!/bin/bash
set -e
export NODE_OPTIONS=--openssl-legacy-provider
 
BRANCH_NAME=$(bash ./.cicd/get-branch-name.sh)
FOLDER_NAME=${BRANCH_NAME//[\/]/-}
OUTPUT_PATH=build
 
mkdir -p build
 
if [ -z "$(./.cicd/skip-commit.sh)" ]; then
 
    if [ -z "$1" ]; then
        OUTPUT_PATH=build/${FOLDER_NAME}
        mkdir -p "${OUTPUT_PATH}"
        echo "Created ${FOLDER_NAME} folder"
    fi
    
    yarn --cwd packages/react build:storybook
    
    mkdir -p "${OUTPUT_PATH}/react"
    cp -r packages/react/docs/dist/* ${OUTPUT_PATH}/react
 
fi
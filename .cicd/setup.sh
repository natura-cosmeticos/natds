#!/bin/bash
set -e
 
if [ -z $(./.cicd/skip-commit.sh) ]; then
    bash .cicd/configure-git.sh
 
    yarn --cwd packages/react install
    yarn --cwd packages/react build
fi

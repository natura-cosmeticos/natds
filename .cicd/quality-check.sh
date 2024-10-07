#!/bin/bash
set -e
 
if [ -z $(./.cicd/skip-commit.sh) ]; then
    echo "Quality Check"
 
    yarn --cwd packages/react 
    yarn --cwd packages/react test:ci
fi
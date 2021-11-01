#!/bin/bash
if [ -z "$1" ]; then
	echo "missing project name"
	exit 1
fi
echo "initializing project ${1}"
mkdir -p "packages/${1}/src"
node ./scripts/buildTemplate $1

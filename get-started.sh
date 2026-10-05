#!/usr/bin/env bash
set -euo pipefail

# The root install installs the theme dependencies, so the theme needs no separate install.
git submodule update --init --recursive
npm install

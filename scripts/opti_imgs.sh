#!/bin/bash

# Usage:
#
# ./scripts/opti_imgs.sh

# This script optimizes the images in JPEGS and PNGS formats.
# You'll need optipng and jpegoptim installed on your machine to run this script
# sudo apt install optipng jpegoptim

PNGS=$(find src/assets/images/ -iname "*.png")
JPEGS=$(find src/assets/images/ -iname "*.jp*")

echo "Optimizing pngs..."
for img in ${PNGS[@]}; do
  optipng -o3 $img
done

echo ""
echo ""
echo "Optimizing jpegs..."
for img in ${JPEGS[@]}; do
  jpegoptim $img
done

echo "All png files have been optimized"
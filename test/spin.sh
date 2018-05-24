#!/bin/bash

STEP=15;
for (( c=0; c<=$((360-$STEP)); c=$((c+$STEP)) ))
do
  node ../cli.js --text .1 --input bootstrap.min.css --rotate $c --output pukestrap.`printf "%03.0f" $c`.min.css
done

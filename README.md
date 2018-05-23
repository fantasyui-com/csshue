# csshue
CLI utility to uniformly rotate hue of colors in a css file.

## Examples

```bash

npx csshue --input old.css --rotate 180 --output new.css
npx csshue --input https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css --rotate 140 --output pukestrap.min.css


```

## Features

- input flag can be a file or url
- rotation can be more than 360, it will wrap around
- output can be STDOUT or filename
- Supports hue rotation only, serves as a template for other transformation utils.

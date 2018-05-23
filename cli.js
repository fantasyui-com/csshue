#!/usr/bin/env node

const csshue = require('./index.js');

const chalk = require('chalk');
const getit = require('getit');

const path = require('path');
const fs = require('fs');
const program = require('commander');

// Avoid require 'magic' and use FS
const packageJson = JSON.parse( fs.readFileSync(__dirname + path.sep + 'package.json').toString() );


program
  .version(packageJson.version)

  // REQUIRED
  .option('-i, --input [url]', 'Url or path of file to use as input.')

  //OPTIONAL
  .option('-o, --output [file]', 'path to output file, if not specified STDOUT is used')

  .option('-r, --rotate [degree]', 'Number of degrees to rotate hue')
  .option('-f, --format [type]', 'HTML color format hex, rgb, hsl, hsv, hwb, cmyk')

  .parse(process.argv);

if(!program.input) console.error(chalk.red('Error: input file is required for normal operation.'))

const bean = {
  input: program.input,
  output: program.output||'STDOUT',
  rotate: parseInt(program.rotate)||90,
  format: program.format||'hex',
}

getit(program.input, function(err, css) {
  if(err){
    console.error(chalk.red('Error: ', err))
    return;
  }
  bean.css = css;
  csshue(bean).then(function(result){
    if(program.output === 'STDOUT'){
      console.log(result)
    }else if(program.output === 'shh'){
      // do nothing
    }else{
      fs.writeFileSync( path.normalize(program.output), result);
    }
  });
});

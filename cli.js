#!/usr/bin/env node

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
  .option('-r, --rotation [degree]', 'Number of degrees to rotate hue')

  .parse(process.argv);

if(!program.input) console.error(chalk.red('Error: input file is required for normal operation.'))

const bean = {
  input: program.input,
  output: program.output||'STDOUT',
  rotate: program.rotate||0,
}

getit(program.input, function(err, data) {
  if(err){
    console.error(chalk.red('Error: ', err))
    return;
  }
    bean.data = data;
    console.log(JSON.stringify(bean,null,' '))
});

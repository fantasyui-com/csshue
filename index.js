const squirm = require('../squirm');
const transformer = require('./hue-transformer.js');

module.exports = function({css, rotate, format}){

  return new Promise(function(resolve, reject){

    const setup = {
      css,
      format,
      logger:({color})=>{ console.log(color) },
      transformer:transformer({rotate}),
    };

    squirm(setup).then(result=>resolve(result));

  }) // Promise
} // module.exports

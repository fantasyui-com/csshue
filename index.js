const squirm = require('squirm');
const transformer = require('./hue-transformer.js');

module.exports = function({css, rotate, desaturate, text, format}){

  return new Promise(function(resolve, reject){

    const setup = {
      css,
      format,
      logger:({color})=>{ },
      transformer:transformer({rotate, desaturate, text}),
    };

    squirm(setup).then(result=>resolve(result));

  });
}

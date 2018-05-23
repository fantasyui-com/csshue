/*
  HUE TRANSFORMER
  Please use this as a template for color transforms.
*/

module.exports = function({rotate}){
  return function({color, /* rule,decl,node */ }){
    color = color.rotate(rotate).rgb();
    return color;
  };
};

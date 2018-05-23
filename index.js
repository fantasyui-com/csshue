// #!/usr/bin/env node
//
// let result = crawlColors({
//     css,
//     format,
//     logger:({color})=>{
//
//
//     },
//     transformer:({color})=>{
//
//       const darknessIntensity = $( "#darkness-intensity" ).val();
//       const lightnessIntensity = $( "#lightness-intensity" ).val();
//       const opaquenessIntensity = $( "#opaqueness-intensity" ).val();
//
//       const mixIntensity = $( "#mix-intensity" ).val();
//       const mixColor = $( "#mix-color" ).val();
//
//     //  color = color.darken()
//       color = color
//       .mix(Color(mixColor), parseFloat(mixIntensity))
//
//       if(lightnessIntensity) color = color.whiten(lightnessIntensity);
//       if(darknessIntensity) color = color.blacken(darknessIntensity);
//       if(opaquenessIntensity) color = color.fade(opaquenessIntensity);
//
//       let previewColor = color;
//       if(format) {
//         let previewFormat = format;
//         if (previewFormat == 'hwb') previewFormat = 'rgb'
//         previewColor = previewColor[previewFormat]();
//       }
//       let previewTransformed = previewColor.toString();
//       function replacer(match, p1, offset, string) {
//         return parseFloat(p1).toFixed(2);
//       }
//       previewTransformed = previewTransformed.replace(/([0-9]\.[0-9]{3,})/g,replacer)
//
//
//       let preview = $('<div></div>');
//       $(preview).addClass("p-3 m-2");
//       $(preview).css({
//         display: 'inline-block',
//         height: '3rem',
//         width: '3rem',
//         background: previewTransformed
//       })
//       $('#color-preview').append(preview);
//
//       return color;
//     }
//   }).then(result=>$('#color-code-output').val(result));
//   ;

var hsl = require('hsl-to-hex')

function modifyColor(hslcolor){
    hslcolor.h = hslcolor.h + Math.floor(Math.random() * 10) - 10;
    hslcolor.s = hslcolor.s + Math.floor(Math.random() * 20) - 20;
    hslcolor.l = hslcolor.l + Math.floor(Math.random() * 20) - 20;
    return hsl( hslcolor.h,  hslcolor.s,  hslcolor.l);
}

module.exports = modifyColor;;

var hsl = require('hsl-to-hex')

function opposite(hslcolor){
    if(hslcolor.h > 180) hslcolor.h -= 180;
    else hslcolor.h += 180;
    const newColor = hsl(hslcolor.h,hslcolor.s,hslcolor.l);
    return newColor;
}

module.exports = opposite;
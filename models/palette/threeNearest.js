var hsl = require('hsl-to-hex')

function threeNearest(hslcolor){
    var  collorarray = [];
    if(hslcolor.h > 90){
        for(var i=0; i< 3; i++){
        hslcolor.h -=30;
        var newColor = hsl(hslcolor.h,hslcolor.s,hslcolor.l);
            collorarray.push(newColor);
        }
    }
else{
    for(var i=0; i< 3; i++){
        hslcolor.h += 30;
        var newColor = hsl(hslcolor.h,hslcolor.s,hslcolor.l);
        collorarray.push(newColor);
    }
}
    return collorarray;
}

module.exports = threeNearest;
    var hsl = require('hsl-to-hex')

    function splitComp(hslcolor){
        var  collorarray = [];
    const newColor = hsl(Math.abs((hslcolor.h + 150) - 360),hslcolor.s,hslcolor.l);
    const newColor2 = hsl(Math.abs((hslcolor.h + 210) - 360),hslcolor.s,hslcolor.l);

    collorarray.push(newColor)
    collorarray.push(newColor2)



        return collorarray;
    }
    
    module.exports = splitComp;
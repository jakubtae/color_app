function namedColor(number){
    const fs = require('fs');

    const colorFile = fs.readFileSync("./models/colors.json", "utf8");
    const colorArrays = JSON.parse(colorFile);
    if(number == 1){
        var colors;
        for(var i = 0; i < number; i++){
            var colorIndex = Math.floor(Math.random() * colorArrays.length) + 0;
            colors = colorArrays[colorIndex];
        }
        return colors;
    }
    var colors =[];
    while(colors.length < number){
        var colorIndex = Math.floor(Math.random() * colorArrays.length) + 0;
        if (colors.indexOf(colorArrays[colorIndex]) === -1)colors.push(colorArrays[colorIndex]);
    }
    return colors;
}

module.exports = namedColor;
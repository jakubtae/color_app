const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('palette/main.ejs');
})

router.post('/', (req, res) => {
    var howMuch = 1 * 3;
    var hexaFragments = [];
    while(hexaFragments.length < howMuch){
        var decimalFragment = Math.floor(Math.random() * 255) + 0;
        if(hexaFragments.indexOf(decimalFragment) === -1){
            var hexaFragment = decimalFragment.toString(16);
            hexaFragments.push(hexaFragment);
        }
    }
    var colors = []
    while(hexaFragments.length > 0)
    {
        var color = "#";
        for(var j = 0; j < 3;j++){
            var color = color+ hexaFragments[0];
            hexaFragments.splice(0,1);
        }
        //! CHECK IF COLOR IS COLSER TO BLACK OR WHITE AND BASED ON THAT SEND ALSO THE text_color ARRAY THAT IS AN OPPOSITE COLOR
        colors.push(color)    
    }
    res.send(colors);
})

module.exports = router;
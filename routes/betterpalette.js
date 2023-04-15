const express = require('express');
const router = express.Router();
const HexToHsl = require("../models/HexToHsl.js");
const fs = require('fs');
functions = [];

//! IMPORTANT 
//* DYNAMICLY READS THE MODELS DIRECTORY
fs.readdirSync('./models/palette').forEach(function(file) {
    var name = file.replace('.js', '');
    functions.push(name);
    exports[name] = require('../models/palette/' + file);
  });
//! IMPORTANT 

router.get('/', (req, res) => {
    res.render('betterpalette/main.ejs');
})

//! IMPORTANT 
//* DYNAMICLY EXECUTE EACH EXPORTED FUNCTION FROM EARLIER READ DIRECTORY
router.post('/', (req, res) => {
    var functionResults = [];
    for (var i = 0; i < functions.length; ++i) {
        //* exports is an object and by using object.values(exports)[i] we can use a function assinged to i value
        functionResults.push(Object.values(exports)[i](HexToHsl(req.body.hexcolor)))
        //! pushes the result of function to arr
    }
    const maincolor = req.body.hexcolor;
    res.send({mainColor: maincolor,  function:functionResults});
})
//! IMPORTANT 

module.exports = router;
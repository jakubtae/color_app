const express = require('express');
const router = express.Router();

// const namedColor = require('../models/namedColor.js');
const randomColor = require("../models/randomColor.js");

var tinycolor = require("tinycolor2");


router.get('/', (req, res) => {
    res.render('palette/main.ejs');
})



router.post('/',async  (req, res) => {
    var colorObject;
    var mainColor;
    var color;
    if(!req.body.mainColor){
        colorObject = randomColor(1);
        color = colorObject[0].hex
    }
    else{
        color = req.body.mainColor;
    }
    mainColor = tinycolor(color);

    var analogus = mainColor.analogous();
    const analogusArray = (analogus.map(function(t) { return t.toHexString(); }));

    var monochromatic = mainColor.monochromatic();
    const monochromaticArray = (monochromatic.map(function(t) { return t.toHexString(); }));

    var splitcomplement = mainColor.splitcomplement();
    const splitcomplementArray = (splitcomplement.map(function(t) { return t.toHexString(); }))
    
    var triad = mainColor.triad();
    const triadArray = (triad.map(function(t) { return t.toHexString(); }))

    var tetrad = mainColor.tetrad();
    const tetradArray = (tetrad.map(function(t) { return t.toHexString(); }))

    res.render('palette/main.ejs' , {mainColor : color, analogus: analogusArray, monochromatic: monochromaticArray, splitcomplement: splitcomplementArray, triad: triadArray, tetrad: tetradArray});
})  

module.exports = router;
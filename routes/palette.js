const express = require('express');
const router = express.Router();
const HexToHsl = require("../models/HexToHsl.js");
const fs = require('fs');
var functionNames = [];
let ejs = require('ejs');
//! IMPORTANT 
//* DYNAMICLY READS THE MODELS DIRECTORY
fs.readdirSync('./models/palette').forEach(function(file) {
    var name = file.replace('.js', '');
    functionNames.push(name);
    exports[name] = require('../models/palette/' + file);
  });
//! IMPORTANT 

router.get('/', (req, res) => {
    res.render('main/palette.ejs');
})

router.post('/', async (req, res) => {
    var functionResults = [];
    for (var i = 0; i < functionNames.length; ++i) {
        //* exports is an object and by using object.values(exports)[i] we can use a function assinged to i value
        const functionWTF = {
            "name" : functionNames[i],
            "values" : Object.values(exports)[i](HexToHsl(req.body.hexcolor))
        }
        functionResults.push(functionWTF)
        //! pushes the result of function to arr
    }
    const maincolor = req.body.hexcolor;
    const html = await ejs.renderFile('./views/updates/palette.ejs',{mainColor: maincolor, functions:functionResults});
    res.send({html:html});
})


router.get("/browse", (req,res)=>{
    res.render("subs/browsepalettes.ejs")
})


router.get("/create", (req,res)=>{
    res.render("subs/createpalette.ejs")
})

module.exports = router;
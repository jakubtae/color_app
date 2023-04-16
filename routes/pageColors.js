const express = require('express');
const router = express.Router();
const fs = require('fs');

const HexToHsl = require("../models/HexToHsl.js");
const modifyColor = require("../models/modifyColor.js");


router.get('/', async (req, res) => {
    const colorMeanings = await JSON.parse(fs.readFileSync("./models/market_colors.json", "utf8"));
    res.render('pageColors/main.ejs', {colorMeanings: colorMeanings});
})

router.post('/', async (req, res) => {
    try{
        const colorMeanings = await JSON.parse(fs.readFileSync("./models/market_colors.json", "utf8"));
        if(!req.body.keys) return res.status(404).send("Error")
        const searchIndex = await colorMeanings.find((type) => type.keys==req.body.keys);
        const modifiedColor = await modifyColor(HexToHsl(searchIndex.color));
        res.render("pageColors/main.ejs", {colorMeanings: colorMeanings, modifiedColor : modifiedColor});
    }catch(err){
        res.send(err);
    }
})
module.exports = router;
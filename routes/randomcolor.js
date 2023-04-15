const express = require("express");
const router = express.Router();
const namedColor = require("../models/namedColor.js");
const randomColor = require("../models/randomColor.js");
const fetch = require("node-fetch"); 


router.get("/", (req, res) => {
  res.render("randomcolor/main.ejs");
});

router.post("/", async (req, res) => {
  const colors = randomColor(req.body.howmuch);
  await getColorName()
  async function getColorName() {
    var link = 'https://api.color.pizza/v1/?values=';
    colors.forEach(color =>{
        link += color.hex.substring(1)+',';
    });
    link += '&list=bestOf';
    const response = await fetch(link);
    const data = await response.json();
    for(var i= 0; i < data.colors.length; i++){
        colors[i].name = data.colors[i].name;
    }
  }
  res.send(colors);
});

router.post("/assoc", (req, res) => {
  const colors = namedColor(req.body.howmuch);
  res.send(colors);
});
module.exports = router;

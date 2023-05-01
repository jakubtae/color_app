const express = require("express");
const router = express.Router();
const namedColor = require("../models/namedColor.js");
var Rainbow = require("rainbowvis.js");
var myRainbow = new Rainbow();

router.get("/", (req, res) => {
  res.render("main/gradient.ejs");
});

router.post("/", (req, res) => {
  var gradient = namedColor(2);

  myRainbow.setNumberRange(1, 5);
  myRainbow.setSpectrum(gradient[0].hex, gradient[1].hex);
  for (var i = 1; i <= 5; i++) {
    const color = new Object();
    color.hex = "#" + myRainbow.colourAt(i);
    gradient.push(color);
  }

  var newLast = gradient[1];
  gradient = gradient.splice(2);
  gradient.push(newLast);

  var linCode = "linear-gradient(" + Math.floor(Math.random() * 360) + "deg ,";
  
  gradient.forEach((color) => {
    linCode = linCode + color.hex + ",";
  });
  linCode = linCode.slice(0, -1) + ")";
  res.send(linCode);
});

module.exports = router;

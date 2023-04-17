if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, "public"))); //! static folder declaration

app.set("view engine", "ejs");
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.use(express.json())
app.use(bodyParser.urlencoded({ limit: "10mB", extended: false })); //! for FORMS USAGE

const landingRouter = require("./routes/landing");
app.use("/", landingRouter);

const randomcolorRouter = require("./routes/randomcolor");
app.use("/randomcolor", randomcolorRouter);

const paletteRouter = require("./routes/palette");
app.use("/palette", paletteRouter);

const betterPaletteRouter = require("./routes/betterpalette");
app.use("/better-palette", betterPaletteRouter);

const gradientRouter = require("./routes/gradient");
app.use("/gradient", gradientRouter);

const pageColorsRouter = require("./routes/pageColors");
app.use("/pageColors", pageColorsRouter);

console.log("Starting");

app.listen(3000);

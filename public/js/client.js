const colorBoxes = document.querySelectorAll(".color_box");
const colornames = document.querySelectorAll(".color_name");
const colorcodes = document.querySelectorAll(".color_code");
var fontColor;

window.onload = fetchNamedColors(5);

this.addEventListener("keypress", (event) => {
  if (event.key == "r") {
    fetchAllColors(5);
  } else if (event.key == " ") {
    fetchNamedColors(5)
  }
});

function fetchAllColors(number){
  var xj = new XMLHttpRequest();
  xj.open("POST", "http://localhost:3000/randomcolor", true);
  xj.setRequestHeader("Content-Type", "application/json");
  xj.send(JSON.stringify({ howmuch: number }));
  xj.onreadystatechange = function () {
    if (xj.readyState == 4) {
      
      var colors = JSON.parse(xj.responseText);
      for (var i = 0; i < 5; i++) {
        colornames[i].innerHTML = " ";
        console.log(colors[i]);
        getFontColor(colors[i])
        colorBoxes[i].style.color = fontColor;
        colorBoxes[i].style.background = colors[i];
        colorcodes[i].innerHTML = colors[i];  
      }
    }
  };
}

function fetchNamedColors(number) {
  var xj = new XMLHttpRequest();
  xj.open("POST", "http://localhost:3000/randomcolor/assoc", true);
  xj.setRequestHeader("Content-Type", "application/json");
  xj.send(JSON.stringify({ howmuch: number }));
  xj.onreadystatechange = function () {
    if (xj.readyState == 4) {
      var colors = JSON.parse(xj.responseText);
      for (var i = 0; i < 5; i++) {
        colorBoxes[i].style.background = colors[i].hex;
        getFontColor(colors[i].hex)
        colorBoxes[i].style.color = fontColor;
        colornames[i].innerHTML = colors[i].name;
        colorcodes[i].innerHTML = colors[i].hex;  

      }
    }
  };
}



function getFontColor(hexCode)
{
    var d = 0;
    var luminance = (0.299 * hexToRgb(hexCode).r + 0.587 * hexToRgb(hexCode).g + 0.114 * hexToRgb(hexCode).b)/255;
    if (luminance > 0.5){
      fontColor = "#000000"
    }
    else{ 
      fontColor = "#ffffff"
    }    
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function hexCheck() {
  var hexinput = document.getElementById("hex_input");
  var hexcolor = document.getElementById("hex_input").value;
  hexcolor = hexcolor.substring(1);
  if (hexcolor.length === 3) {
    var arr = hexcolor.split("");
    var sixDigit = arr
      .map(function (hexVal) {
        return hexVal + hexVal;
      })
      .join("");
    hexinput.value = "#"+sixDigit;
  } else if (hexcolor.length != 6) {
    hexinput.value = "#000000";
  }
}
function fetchBetterPalette(){
  var hexcolor = document.getElementById("hex_input").value;
  console.log(hexcolor);
  var xj = new XMLHttpRequest();
  xj.open("POST", "http://localhost:3000/better-palette", true);
  xj.setRequestHeader("Content-Type", "application/json");
  xj.send(JSON.stringify({ hexcolor:  hexcolor}));
  xj.onreadystatechange = async function () {
    if (xj.readyState == 4) {
      var response = xj.responseText;
      console.log(response)
    }
  };
}


const footer = document.querySelector("footer");
footer.classList.add("sticked");

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
  console.log("Fetching")
  var hexcolor = document.getElementById("hex_input").value;
  var xj = new XMLHttpRequest();
  xj.open("POST", "http://localhost:3000/palette", true);
  xj.setRequestHeader("Content-Type", "application/json");
  xj.send(JSON.stringify({ hexcolor:  hexcolor}));
  xj.onreadystatechange = async function () {
    if (xj.readyState == 4) {
      var response = JSON.parse(xj.responseText);
      const content = document.getElementById("content");
      content.innerHTML = response.html;
      footer.classList.remove("sticked");

      const cbox = document.querySelectorAll(".color-box");
      
      const msg = document.createElement("div");
      msg.style.display = "block";
      msg.style.position = "absolute";
      msg.style.minWidth = "100px";
      msg.style.aspectRatio = "1/1";
      msg.style.background = "red";
      function tellPos(p){
      content.appendChild(msg);
        msg.style.left = p.pageX+"px";
        msg.style.top = p.pageY+"px";
      }
      
       for (let i = 0; i < cbox.length; i++) {
            cbox[i].addEventListener("mouseover mousemove", tellPos, false)
       }

    }
  };
}

function justCopy(value){
  navigator.clipboard.writeText(value);
}
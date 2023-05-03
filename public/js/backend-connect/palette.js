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
      function clipShow(){
        const msg = document.querySelector(".msg");
        msg.classList.remove("hidden");
        setTimeout(() => {
          msg.classList.add("hidden");
        },3000)
      }
       for (let i = 0; i < cbox.length; i++) {
            cbox[i].addEventListener("click", clipShow, false)
       }

    }
  };
}

function justCopy(value){
  navigator.clipboard.writeText(value);
}
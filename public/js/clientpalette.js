this.addEventListener("keypress", (event) => {
  if (event.key == " ") {
    fetchOneColor();
  };
});

function fetchOneColor(){
  var xj = new XMLHttpRequest();
  xj.open("POST", "http://localhost:3000/palette", true);
  xj.setRequestHeader("Content-Type", "application/json");
  xj.send();
  xj.onreadystatechange = async function () {
    if (xj.readyState == 4) {
      var colors = JSON.parse(xj.responseText);
      console.log(colors);
    }
  };
}

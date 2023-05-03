var gradientBox = document.querySelector(".gradientBox");
var gradientCss = document.querySelector(".gradientCss");

function manageData(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/gradient");
    xhr.onload = function (event) {
        gradientBox.style.background = event.target.response;
        gradientCss.value = "background: " + event.target.response;
    };
    xhr.send();
}

function copy(value){
  navigator.clipboard.writeText(value);
}
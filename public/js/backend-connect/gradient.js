function manageData(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/gradient");
    xhr.onload = function (event) {
        var gradientBox = document.querySelector(".gradientBox");
        gradientBox.style.background = event.target.response;
        var gradientCss = document.querySelector(".gradientCss");
        gradientCss.innerHTML = "background: " + event.target.response;
    };
    xhr.send();
}
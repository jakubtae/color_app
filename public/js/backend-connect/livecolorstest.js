var preColor;
function saveColor() {
  preColor = document.querySelector("input[type='color']").value;
  return preColor;
}
function changeColor() {
  // ! https://stackoverflow.com/questions/17596761/changing-value-of-class-variable
  var newColor = document.querySelector("input[type='color']").value;
  const colorsMain = document.querySelectorAll(".color-main");
  colorsMain.forEach((color) => {
    color.style.color = newColor;
  });
  const bgsMain = document.querySelectorAll(".bg-main");
  bgsMain.forEach((color) => {
    color.style.background = newColor;
  });
}

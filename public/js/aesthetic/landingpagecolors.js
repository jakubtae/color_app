const colorCombs = [
  ["#320D3E", "#FFD79D", "#D902EE"],
  ["#12A4D9", "#D9138A", "#E2D810"],
  ["#EFB5A3", "#F57E7E", "#315F72"],
  ["#408EC6", "#7A2048", "#1E2761"],
  ["#B85042", "#E7E8D1", "#A7BEAE"],
  ["#ECC19C", "#1E847F", "black"],
  ["#1E3D59", "#F5F0E1", "#FF6E40"],
  ["#EF9D10", "#3B4D61", "#6B7B8C"],
  ["#8A307F", "#79A7D3", "#6883BC"],
  ["#1D3C45", "#D2601A", "#FFF1E1"],
  ["#AED6DC", "#FF9A8D", "#4A536B"],
  ["#12A4D9", "#D9138A", "#E2D810"],
  ["#E3B448", "#CBD18F", "#3A6B35"],
  ["#320D3E", "#FFD79D", "#D902EE"],
  ["#DDC3A5", "#201E20", "#E0A96D"],
  ["#EDCA82", "#097770", "#A9C0A6"],
  ["#79CBB8", "#500472", "#79CBB8"],
  ["#12A4D9", "#D9138A", "#E2D810"],
  ["#D13CA4", "#FFEA04", "#FE3A9E"],
];
const circles = document.querySelectorAll("circle");

setInterval(displayHello, 3500);

function displayHello() {
    const z = Math.floor(Math.random() * (colorCombs.length - 0) + 0);
    for(var i = 0; i < 3; i++){
      circles[i].style.fill = colorCombs[z][i];
    }
}

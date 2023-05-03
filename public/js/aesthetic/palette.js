const hexInput = document.querySelector('#hex_input');
const hexSubmit = document.querySelector('#hex_submit');

var fontColor;


async function changeColors(){
    await getFontColor(hexInput.value);
    hexInput.style.backgroundColor =hexInput.value;
    hexInput.style.color = fontColor;
}
hexInput.addEventListener("change", changeColors, false);
hexSubmit.addEventListener("click", changeColors, false);

async function getFontColor(hexCode)
{ 
  try{
    var rgb = await hexToRgb(hexCode);
    var d = 0;
    var luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b)/255;
    if (luminance > 0.5){
      fontColor = "#000000"
    }
    else{ 
      fontColor = "#ffffff"
    }    
  } catch(e){
    console.log(e);
  }

}

async function hexToRgb(hex) {
    try{
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    } catch (e) {
      console.log("hextorgb" + e)
    }
  }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const buton = document.querySelector(".change-color");
const color = document.querySelector(".color");
buton.addEventListener("click", changecolor);
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function changecolor() {
  const hex = getRandomHexColor();
  const rgbColor = hexToRgb(hex);
  color.textContent = rgbColor;
  body.style.backgroundColor = rgbColor;
  console.log(rgbColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const bodyColor = document.querySelector("body")

colorBtn.addEventListener("click", handleClick);

function handleClick(event) {
const newColor = getRandomHexColor();
 bodyColor.style.backgroundColor = newColor;
 colorSpan.textContent = newColor;
}

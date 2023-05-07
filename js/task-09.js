function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body
const color = document.querySelector('.color')
const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', changeColor)

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor()

  color.textContent = body.style.backgroundColor
}
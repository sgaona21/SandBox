console.log("JS Linked");

function randomColor() {
    function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }
  let red = getRandomNumber(255);
  let green = getRandomNumber(255);
  let blue = getRandomNumber(255);
  let textColor = `rgb(${red}, ${green}, ${blue})`;

  return textColor;
}

const listItems = document.getElementsByTagName("li");
const button = document.getElementById("button");
const addButton = document.getElementById('add-button');
let newItem = document.querySelector('.input-main')

function changeRed() {
    let color = randomColor();
    for (const v of listItems) {
        v.style.color = color;
    }
}

button.addEventListener("click", changeRed);

addButton.addEventListener("click", () => {
    console.log(newItem.value)
    newItem.value = ''
})


const paragraph = document.querySelector("p");





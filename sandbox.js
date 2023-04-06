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

function changeRed() {
    let color = randomColor();
    for (const v of listItems) {
        v.style.color = color;
    }
}

button.addEventListener("click", changeRed);

const moreItems = document.querySelectorAll("li");

console.log(moreItems[2])




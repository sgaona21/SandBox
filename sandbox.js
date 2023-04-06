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
let newItem = document.querySelector('.input-main');
const toDoList = document.querySelector('.to-do-list');
const deleteButton = document.querySelector('.delete');

function changeRed() {
    let color = randomColor();
    for (const v of listItems) {
        v.style.color = color;
    }
}

button.addEventListener("click", changeRed);

addButton.addEventListener("click", () => {
    let task = document.createElement("li");
    task.textContent = newItem.value;
    task.innerHTML += ` <button class="delete">Delete</button>`
    toDoList.append(task)
    newItem.value = '';
})

deleteButton.addEventListener("click", () => {
    console.log("hell")
})


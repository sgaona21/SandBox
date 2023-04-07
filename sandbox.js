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

function changeRed() {
    for (const v of listItems) {
        v.style.color = randomColor();
    }
}

//////////VARIABLES//////////
const listItems = document.getElementsByTagName("li");
const button = document.getElementById("button");
const addButton = document.getElementById('add-button');
let newItem = document.querySelector('.input-main');
const toDoList = document.querySelector('ul');
const nodeArray = toDoList.children
//////////VARIABLES//////////

button.addEventListener("click", changeRed);
let i = 0;
addButton.addEventListener("click", () => {
    toDoList.innerHTML += `<li>${newItem.value} <button id="${i}" class="delete-button"> Delete </button></li>`
    newItem.value = '';
    i++;

    const deleteButton = document.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        console.log("hey")

    })
})

console.log(toDoList)

let selector;
window.onclick = e => {
    console.log(e.target.id)
    selector = e.target.id
} 

const newArray = [...nodeArray]
newArray.splice(1, 1)
console.log(nodeArray)
console.log(newArray)






const colors = ["red", "blue", "green"];
colors.splice(2, 1);
console.log(colors)
console.log(selector)


console.log("hi");





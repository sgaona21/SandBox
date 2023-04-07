console.log("JS Linked");

//////////VARIABLES//////////
const button = document.getElementById("button");
const addButton = document.getElementById('add-button');
let userInput = document.querySelector('.input-main');
const toDoList = document.querySelector('ul');
//////////VARIABLES//////////

let i = 1;
addButton.addEventListener("click", () => {
    toDoList.innerHTML += `<li id="list-item-${i}">${userInput.value} <button id="delete-button-${i}">Delete</button> </li>`
    userInput.value = '';
    i++;
});

toDoList.addEventListener("click", (e) => {
    let stageDeletion = e.target.id
    let targetedDeleteButton = document.getElementById(`${stageDeletion}`);
    targetedDeleteButton.remove();
})













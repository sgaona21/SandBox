console.log("JS Linked");

/////VARIABLES/////
let userInput = document.getElementById("user-input")
const main = document.getElementById("main");
const section = document.getElementById("section");
const paragraph = document.getElementById("nested-p");
const unorderedList = document.querySelector("ul");
const listItems = document.getElementsByTagName("li");
const listItemsArray = [...listItems]
const addButton = document.getElementById("add-button")
let deleteButton = '';
/////VARIABLES/////


addButton.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.innerHTML = `${userInput.value} <button id="item-delete"> Delete </button>`
    unorderedList.append(newItem)

    deleteButton = document.getElementById("item-delete")

    userInput.value = ''
})



























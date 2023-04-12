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
/////VARIABLES/////

userInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
    let newListItem  = document.createElement("li");
    newListItem.innerHTML = userInput.value; 
    unorderedList.append(newListItem);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete"; 
    deleteButton.id = "delete-button"
    newListItem.append(deleteButton);

    userInput.value = '';
    }    
});


unorderedList.addEventListener("click", (event) => {
    if (event.target.id === "delete-button") {
        console.log(event.target.parentNode)
        event.target.parentNode.remove();
    }
});






























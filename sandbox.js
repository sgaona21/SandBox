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

addButton.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.innerHTML = userInput.value 
    unorderedList.append(newItem);
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = " Delete"
    deleteButton.className = "delete-button"
    newItem.append(deleteButton)
    userInput.value = '';
});

unorderedList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let deleteButton = event.target;
        let parent = deleteButton.parentNode;
        parent.remove();
    }
})





























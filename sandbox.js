console.log("JS Linked");

const main = document.getElementById("main");
const section = document.getElementById("section");
const paragraph = document.getElementById("nested-p");

const unorderedList = document.querySelector("ul");
const listItems = document.getElementsByTagName("li");
const listItemsArray = [...listItems]


main.addEventListener("click", () => {
    console.log("MAIN was clicked")
});

section.addEventListener("click", () => {
    console.log("SECTION was clicked")
});

paragraph.addEventListener("click", () => {
    console.log("PARAGRAPH was clicked")
});


unorderedList.addEventListener("click", (event) => {
    if (event.type === "click") {
        console.log("its true yo")
        event.target.style.display = "none"
    }
})





const numbers = ["one", "two", "three", "four", "five"];

























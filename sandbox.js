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

let stringer = "  who in the world does that  "
let tester = "hello"



let reverseArray = []
let outputString = '';
console.log(stringer)
for (let i = stringer.length -1; i <= stringer.length; i--) {
    console.log(stringer[i])
    reverseArray.push(stringer[i])
    if (i === 0) {
        break
    }
}
for (let a = 0; a < reverseArray.length; a++) {
    outputString = outputString + reverseArray[a];
}

let present = 0;
for (let t = 0; t < reverseArray.length; t++) {
    if (reverseArray[t] === " ") {
        reverseArray.shift();
    }
    if (reverseArray[t] != " ") {
        present++
    }
    if (present > 0) {
        break
    }
    console.log(present)
}

let newString = '';
for (let x = 0; x < outputString.length; x++) {
    if (outputString[x] != ' ') {
        newString = newString + outputString[x];
    }
}








// console.log(removedSpacesString)
console.log(newString)
console.log(outputString)
console.log(reverseArray)




var lengthOfLastWord = function(s) {
    
};




































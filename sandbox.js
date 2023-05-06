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

const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(BigInt(+digits.join('')))

var plusOne = function(digits) {
    let arrayToString = ''
    for (let x in digits) {
        arrayToString += digits[x]
    }
    console.log(arrayToString)

    let newNumber = BigInt(arrayToString)
    console.log(newNumber);
    console.log(BigInt(newNumber))
    newNumber = newNumber + BigInt(1)
    console.log(newNumber)
    newNumber = newNumber.toString();
    let finalArray = [];
    for (let i = 0; i < newNumber.length; i++) {
        finalArray.push(+newNumber[i]);
    }
    return finalArray
};

console.log(plusOne(digits))









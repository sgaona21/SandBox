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

let s = "  who is that  ";
let s2 = "a";
let s3 = "Hello";
let s4 = "abc";

var lengthOfLastWord = function(s) {
    console.log(s)
    ///convert the string to a reversed array///
    let stringToArray = [];
    for (let a = s.length -1; a < s.length; a--) {
        if (a === -1) {
            break
        }
        stringToArray.push(s[a]);
    }
    console.log(stringToArray)

    ///remove empty spaces from BEGINNING of array///
        while (stringToArray[0] === ' ') {
            stringToArray.shift();
            if (stringToArray[0] != ' ') {
            break;
        }
    }
    console.log(stringToArray)

    ///convert the array to string with ONE word///
    let arrayToString = '';
    for (let c = 0; c < stringToArray.length; c++) {
        if (stringToArray[c] === ' ') {
            break
        }
        arrayToString += stringToArray[c];
    }
    console.log(arrayToString)
    console.log("indentation")

    ///reverse the String///
    let finalString = '';
    for (let d = arrayToString.length -1; d < arrayToString.length; d--) {
        if (d === -1) {
            break
        }
        finalString += arrayToString[d];
    }
    console.log(finalString)

    return finalString.length;
};

console.log(lengthOfLastWord(s4))












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

let needle = 'sad';
let haystack = 'sjsjsjsjsjshhhahdhhsad';
// console.log(haystack[9])

/// Find first occurance of needle in haystack. and return index of first letter of the string of needle


var strStr = function(haystack, needle) {
    let tracker = 0;
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle[tracker]) {
                tracker++;    
                console.log(tracker) 
            } else { 
                tracker--;
                // console.log(tracker)
                if (tracker < 0) {
                    tracker = 0;
                }
              }
            if (tracker === needle.length) {
                console.log()
                return "Its there!!"
            }
            console.log(tracker)
        }
        return -1
};

console.log(strStr(haystack, needle))




































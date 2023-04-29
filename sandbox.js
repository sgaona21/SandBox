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

let needle = 'issip';
let haystack = 'mississippi';

var strStr = function(haystack, needle) {
    let tracker=0;
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle[tracker]) {
                tracker++;    
            } else if (!haystack[i] === needle[tracker]){ 
                tracker--;
                if (tracker < 0) {
                    tracker = 0;
                }
              }
            if (tracker === needle.length) {
                return haystack.indexOf(needle)
            }
        }
        return -1
};

console.log(strStr(haystack, needle))




































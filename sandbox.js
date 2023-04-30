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


let nums = [1,3,5,6];
let target = 4;



var searchInsert = function(nums, target) {
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[nums.length -1]) {
        return nums.indexOf(nums[nums.length -1]) +1
    }
    for (let i = 0; i < nums.length; i++) {
        if (target > nums[i] && target < nums[i + 1]) {
            return nums.indexOf(nums[i+1])
        }
    }
    return nums.indexOf(target);    
};

console.log(searchInsert(nums, target))




































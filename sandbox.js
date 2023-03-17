console.log("JS Linked");

/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/


// 2. Store the rank of a player


// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element


let correctAnswers = 0
let crown = "";

const question1 = prompt("Which NBA team is from Phoenix?");
if (question1 === "Suns") {
  correctAnswers++
}
const question2 = prompt("Which NBA team is from Memphis?");
if (question2 === "Grizzlies") {
  correctAnswers++
}
const question3 = prompt("Which NBA team is from Boston?");
if (question3 === "Celtics") {
  correctAnswers++
}
const question4 = prompt("Which NBA team is from Houston?");
if (question4 === "Rockets") {
  correctAnswers++
}
const question5 = prompt("Which NBA team is from Miami?");
if (question5 === "Heat") {
  correctAnswers++
}

if (correctAnswers == 5) {
  crown = "Gold"
} else if (correctAnswers == 3 || correctAnswers == 4) {
  crown = "Silver"
} else if (correctAnswers == 2 || correctAnswers == 1) {
  crown = "Bronze"
} else {
  crown = "NO CROWN"
}

document.querySelector(".myheader").innerHTML = `You got ${correctAnswers} out of 5 questions correct. Crown earned: ${crown}`




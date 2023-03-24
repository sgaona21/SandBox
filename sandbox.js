console.log("JS Linked");

const questions = [
  ["What is the capital of Arizona?", "Phoenix"],
  ["What is the capital of California?", "Sacremento"],
  ["What is the capital of Texas?", "Austin"]
];

let correct = 0;
let answer = '';
let right = [];
let wrong = [];
let rightText = '';
let wrongText = '';

for (let i = 0; i < questions.length; i++) {
  answer = prompt(questions[i][0]).toUpperCase();
  if (answer === questions[i][1].toUpperCase()) {
    correct++;
    right.push(questions[i][0]);
  } else {
    wrong.push(questions[i][0]);
  }
};

document.getElementById("header").innerHTML = `You got ${correct} question(s) correct.`

function summary(array, text) {
for (let a = 0; a < array.length; a++) {
    text += `<p> ${a+1}. ${array[a]} </p>`;
  }
  return text;
}

document.getElementById("paragraph").innerHTML = `
  <h2> You got these questions CORRECT: </h2>
  ${summary(right, rightText)}
  <h2> You got these questions WRONG: </h2>
  ${summary(wrong, wrongText)}
`







  









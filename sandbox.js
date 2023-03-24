console.log("JS Linked");

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

const answer = getRandomNumber(100);
// console.log(`Hint: ${answer}`);
let attempts = 0;
document.getElementById("header").innerHTML = `5 tries are UP! YOU SUCK!!!!`

for (let i = 0; i < 5; i++) {
  let guess = prompt("I am thinking of a number between 1 and 100. What is it?");
  attempts++;
  console.log(`Attempts: ${attempts}`)
  if (guess > answer) {
    console.log("Lower");
  } else {
    console.log("Higher")
  }
  if (guess == answer) {
    document.getElementById("header").innerHTML = `SUCCESS! It took you ${attempts} tries to guess the number ${answer}! WOW!`;
    break;
  };
};

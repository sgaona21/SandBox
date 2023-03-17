console.log("JS Linked");

let correctAnswers = 0;
let crown;

function quizQuestion(city, team) {
let question = prompt(`Which NBA team is from ${city}?`);
if (question.toLowerCase() === team.toLowerCase()) {
  correctAnswers++
}
}

quizQuestion("Phoenix", "Suns");
quizQuestion("Memphis", "Grizzlies");
quizQuestion("Miami", "Heat");
quizQuestion("Charlette", "Hornets");
quizQuestion("Golden State", "Warriors");


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




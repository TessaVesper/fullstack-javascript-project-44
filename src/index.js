import readlineSync from "readline-sync";

export function greeting() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
}

export function gameIteration(title, getPair) {
  let gameOn = true;
  let count = 3;
  const name = greeting();
  console.log(title);

  while (gameOn === true) {
    let pair = getPair();
    let randomValue = pair[0];
    let correctAnswer = pair[1].toString();
    console.log(`Question: ${randomValue}`);
    const reply = readlineSync.question("Your answer: ");

    if (reply !== correctAnswer) {
      console.log(
        `It is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`
      );
      gameOn = false;
    } else {
      console.log("Correct!");
      count -= 1;
      if (count === 0) {
        console.log(`Congratulations, ${name}!`);
        gameOn = false;
      }
    }
  }
}

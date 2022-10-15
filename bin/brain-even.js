#!/usr/bin/env node
import readlineSync from 'readline-sync';

export function guessGame() {
    const name = readlineSync.question('May I have your name? Your answer: ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let gameOn = true;
    let count = 3;
    let correctAnswer;

    while (gameOn === true) {
        const randomValue = Math.floor(Math.random() * 101);
        console.log(`Question: ${randomValue}`);
        const reply = readlineSync.question("Your answer: ");
 
        if (randomValue % 2 === 0) {
            correctAnswer = "yes";
        } else {
            correctAnswer = "no";
        }

        if (reply !== correctAnswer) {
            console.log(`It is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`)
            gameOn = false;
        } else {
            console.log('Correct!');
            count -= 1;
            if (count === 0) {
                console.log(`Congratulations, ${name}!`)
                gameOn = false;
            }
        }
}
}

guessGame();
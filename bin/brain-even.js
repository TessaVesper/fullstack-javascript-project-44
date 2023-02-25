#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

const guessEven = () => {
  let tries = 3;
  let sum = 0;
  const name = getName();

  while (tries > 0) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${randomNumber}`);
    const guess = readlineSync.question('Your answer: ');

    if (guess === correctAnswer) {
      console.log('Correct!');
      sum += 1;
    } else {
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
    tries -= 1;
  }
  if (sum === 3) console.log(`Congratulations, ${name}!`);
};

export default guessEven;

guessEven();

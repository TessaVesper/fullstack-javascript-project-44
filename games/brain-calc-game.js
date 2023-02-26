import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

const getRandomOperation = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandom = () => Math.floor(Math.random() * 100);

const guessCalc = () => {
  let tries = 3;
  let sum = 0;
  const name = getName();

  while (tries > 0) {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const operations = ['+', '-', '*'];
    const selectedOperation = getRandomOperation(operations);

    let correctAnswer = 0;
    switch (selectedOperation) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        correctAnswer = null;
    }

    console.log('What is the result of the expression?');
    console.log(`Question: ${randomNumber1} ${selectedOperation} ${randomNumber2}`);
    const guess = Number(readlineSync.question('Your answer: '));

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

export default guessCalc;
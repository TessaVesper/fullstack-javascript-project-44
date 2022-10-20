#!/usr/bin/env node

import { gameIteration } from '../src/index.js';

const getRandomValue = () => Math.floor(Math.random() * 11);
const getRandomOperation = (array) => array[Math.floor(Math.random() * array.length)];

export default function brainCalc() {
  const titleCalc = 'What is the result of the expression?';

  const calcGame = () => {
    const operations = ['+', '-', '*'];
    const selectedOperation = getRandomOperation(operations);
    const number1 = getRandomValue();
    const number2 = getRandomValue();

    const question = `${number1} ${selectedOperation} ${number2}`;

    let correctAnswer = 0;
    switch (selectedOperation) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      default:
        correctAnswer = null;
    }

    const getPair = [question, correctAnswer];
    return getPair;
  };

  gameIteration(titleCalc, calcGame);
}

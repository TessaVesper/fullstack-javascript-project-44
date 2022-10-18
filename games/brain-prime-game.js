#!/usr/bin/env node

import { gameIteration } from "../src/index.js";

const getRandomValue = () => Math.floor(Math.random() * 101);
const getCorrectAnswer = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return "no";
  return "yes";
};

export function brainPrime() {
  const titlePrime = `Answer "yes" if given number is prime. Otherwise answer "no".`;

  const primeGame = () => {
    const number = getRandomValue();
    const correctAnswer = getCorrectAnswer(number);
    const question = `${number}`;

    const getPair = [question, correctAnswer];
    return getPair;
  };

  gameIteration(titlePrime, primeGame);
}

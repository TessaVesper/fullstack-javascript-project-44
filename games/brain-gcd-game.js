#!/usr/bin/env node

import { gameIteration } from '../src/index.js';

const getRandomValue = () => Math.floor(Math.random() * 101);
const getCorrectAnswer = (a, b) => {
    if (!b) {
        return a;
    }
    return getCorrectAnswer(b, a % b);
};

export function brainGcd() {
    const titleGcd = 'Find the greatest common divisor of given numbers.';

    const gcdGame = () => {
        const number1 = getRandomValue();
        const number2 = getRandomValue();

        const question = `${number1} ${number2}`;

        const correctAnswer = getCorrectAnswer(number1, number2);

        const getPair = [question, correctAnswer];
        return getPair;
    };

    gameIteration(titleGcd, gcdGame);
}

#!/usr/bin/env node

import { gameIteration } from '../src/index.js';

const getRandomValue = () => Math.floor(Math.random() * 101);
const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

export function brainEven() {
    const titleEven = 'Answer "yes" if the number is even, otherwise answer "no".';

    const evenGame = () => {
        const number = getRandomValue();
        const correctAnswer = getCorrectAnswer(number);

        const getPair = [number, correctAnswer];
        return getPair;
    };

    gameIteration(titleEven, evenGame);
}

#!/usr/bin/env node

import { gameIteration } from '../src/index.js';

const getRandomValue = () => Math.floor(Math.random() * 101);
const getRandomValuePr = () => Math.floor(Math.random() * (10 - 5 + 1) + 5);
const getRandomOperation = (array) => array[Math.floor(Math.random() * array.length)];

const getArr = (start, stop, step) => {
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
};

export default function brainProgression() {
  const titleProgression = 'What number is missing in the progression?';

  const progressionGame = () => {
    const start = getRandomValue();
    const step = getRandomValuePr();
    const length = getRandomValuePr();
    const stop = start + step * length;

    let arr = getArr(start, stop, step);

    const index = arr.indexOf(getRandomOperation(arr));
    const coveredValue = arr[index];
    arr[index] = '..';
    arr = arr.join(' ');

    const question = `${arr}`;
    const correctAnswer = `${coveredValue}`;

    const getPair = [question, correctAnswer];
    return getPair;
  };

  gameIteration(titleProgression, progressionGame);
}

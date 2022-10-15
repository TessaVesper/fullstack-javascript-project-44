import readlineSync from 'readline-sync';

export function getName() {
    const name = readlineSync.question('May I have your name? Your answer: ');
    console.log(`Hello, ${name}!`);
};
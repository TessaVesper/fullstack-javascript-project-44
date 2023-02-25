import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('brain-games\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

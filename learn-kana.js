import { LATIN_TO_HIRAGANA } from './latin-to-hiragana.js';

const latinValuesArray = Object.keys(LATIN_TO_HIRAGANA);

const generateRandomLatinValue = () => {
  const maxLimit = Object.keys(LATIN_TO_HIRAGANA).length;
  const rand = Math.floor(Math.random() * maxLimit);
  return rand;
};

while (true) {
  const randomLatinValue = latinValuesArray[generateRandomLatinValue()];
  console.log(
    `La lettre à écrire en Hiragana sera la suivante : ${randomLatinValue}`
  );
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(
    `Voici le kana correspondant : ${LATIN_TO_HIRAGANA[randomLatinValue]}`
  );
  console.log('Suivant...\n');
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

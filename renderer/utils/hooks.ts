import { useState } from 'react';
import { readFileSync } from 'fs';

const readTxtFile = (filePath: string) => {
  const contents = readFileSync(filePath, 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr);

  return arr;
};

export const useWord = () => {
  const [word, setWord] = useState<string>();
  const [previousWord, setPreviousWord] = useState<string>();

  const resetWord = () => {
    try {
      // const wordArray = readTxtFile('./wordList.txt');

      // while (true) {
      //   const randomIndex = Math.floor(Math.random() * wordArray.length);
      //   const randomWord = wordArray[randomIndex];

      //   if (randomWord !== previousWord) {
      //     setWord(previousWord);
      //     break;
      //   }
      // }
      setWord('laptop');
    } catch (err) {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  };

  const setNewWord = () => {
    setPreviousWord(word);
    resetWord();
  };

  const isWordCorrect = (correctGuessedLetter: string[]) => {
    var isCorrect: boolean[] = [];

    word.split('').forEach((letter) => {
      if (!correctGuessedLetter.includes(letter)) {
        isCorrect.push(false);
      }
      isCorrect.push(true);
    });

    if (isCorrect.includes(false)) {
      return false;
    }
    return true;
  };

  const isLose = (wrongGuessedLetter: string[]) => {
    if (wrongGuessedLetter.length >= 6) {
      return true;
    }
    return false;
  };

  return {
    word,
    setNewWord,
    isWordCorrect,
    isLose
  };
};

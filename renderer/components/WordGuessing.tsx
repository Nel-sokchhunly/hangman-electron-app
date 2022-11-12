import React from 'react';

export default function WordGuessing({
  word = '_',
  correctGuessedLetters
}: {
  word: string;
  correctGuessedLetters: string[];
}) {
  const wordLength = word.length;
  const correctGuessedLettersSet = new Set(correctGuessedLetters);

  const Key = ({ letter }) => {
    const isCorrect = correctGuessedLettersSet.has(letter);

    return (
      <div
        className='
          w-10 h-12 lg:w-14 lg:h-16 m-2 
          flex justify-center items-center 
          border-2 rounded-lg border-white
          font-bold text-lg lg:text-2xl text-white
          duration-300
          ease-in-out
        '
      >
        {isCorrect ? <div>{letter.toUpperCase()}</div> : <div>_</div>}
      </div>
    );
  };

  return (
    <div
      className='
        flex flex-row items-center justify-center
        h-full
      '
    >
      {word.split('').map((letter, index) => (
        <Key letter={letter} key={index} />
      ))}
    </div>
  );
}

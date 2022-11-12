import React from 'react';

export default function CustomKeyboard({
  isGameStarted,
  onKeyClick,
  wrongGuessedLetters,
  correctGuessedLetters
}: {
  onKeyClick: (key: string) => void;
  wrongGuessedLetters: string[];
  correctGuessedLetters: string[];
  isGameStarted: boolean;
}) {
  const wrongGuessedLettersSet = new Set(wrongGuessedLetters);
  const correctGuessedLettersSet = new Set(correctGuessedLetters);
  const guessedLettersSet = new Set([
    ...wrongGuessedLettersSet,
    ...correctGuessedLettersSet
  ]);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const Key = ({ letter }) => {
    const isGuessed = guessedLettersSet.has(letter);
    const isCorrect = correctGuessedLettersSet.has(letter);

    const correctStyle =
      'bg-green-200 text-slate-900 pointer-events-none border-green-200';
    const wrongStyle =
      'bg-red-200 text-slate-900 pointer-events-none border-red-200';

    return (
      <button
        className={`
          w-10 h-12 lg:w-14 lg:h-16 m-2
          flex justify-center items-center
          border-2 
          font-bold text-lg lg:text-2xl
          rounded-lg 
          duration-300

          ${
            isGameStarted
              ? 'hover:bg-slate-200 hover:text-slate-900 '
              : 'pointer-events-none'
          }
          
          ${
            isGuessed
              ? isCorrect
                ? correctStyle
                : wrongStyle
              : 'text-white border-white'
          }
        `}
        onClick={() => onKeyClick(letter)}
        disabled={!isGameStarted}
      >
        {letter.toUpperCase()}
      </button>
    );
  };

  return (
    <div
      className='
        h-full
        flex justify-center items-center
      '
    >
      <div
        className='
          flex flex-row flex-wrap justify-center items-end
        '
      >
        {alphabet.map((letter) => (
          <Key letter={letter} key={letter} />
        ))}
      </div>
    </div>
  );
}

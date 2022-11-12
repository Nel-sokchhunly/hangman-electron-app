import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import CustomKeyboard from '../components/CustomKeyboard';
import WordGuessing from '../components/WordGuessing';
import { useWord } from '../utils/hooks';

function Home() {
  const [isFirstLoaded, setIsFirstLoaded] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wrongGuessedLetters, setWrongGuessedLetters] = useState([]);
  const [correctGuessedLetters, setCorrectGuessedLetters] = useState([]);

  const { word, setNewWord, isWordCorrect, isLose } = useWord();

  const onPressStart = () => {
    setIsFirstLoaded(false);
    setIsPlaying(true);
    setNewWord();
  };

  const onPressReset = () => {
    setNewWord();
    setWrongGuessedLetters([]);
    setCorrectGuessedLetters([]);
    setIsPlaying(true);
  };

  const onKeyClick = (key: string) => {
    const correctLetters = [...correctGuessedLetters, key];
    const wrongLetters = [...wrongGuessedLetters, key];
    if (word.includes(key)) {
      setCorrectGuessedLetters(correctLetters);
      isWordCorrect(correctLetters) && setIsPlaying(false);
    } else {
      setWrongGuessedLetters(wrongLetters);
      isLose(wrongLetters) && setIsPlaying(false);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Hangman Application</title>
      </Head>
      <div
        className='
          h-screen
          flex flex-col
        '
      >
        <div
          className='
            mx-8 mt-8 mb-4 p-4
            bg-slate-900
            h-full
            rounded-xl
            grid grid-cols-3 xl:grid-cols-2 gap-4
          '
        >
          <div
            className='
              flex flex-col 
              col-span-2 xl:col-span-1
            '
          >
            <div className='h-1/3'>
              <WordGuessing
                word={word}
                correctGuessedLetters={correctGuessedLetters}
              />
            </div>
            <div className='h-2/3'>
              <CustomKeyboard
                isGameStarted={isPlaying}
                wrongGuessedLetters={wrongGuessedLetters}
                correctGuessedLetters={correctGuessedLetters}
                onKeyClick={onKeyClick}
              />
            </div>
          </div>
          <div className='bg-yellow-100 '>hangman art</div>
        </div>
        <Navbar
          isFirstLoaded={isFirstLoaded}
          onPressStart={onPressStart}
          onPressReset={onPressReset}
        />
      </div>
    </React.Fragment>
  );
}

export default Home;

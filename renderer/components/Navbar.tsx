import React from 'react';
import Image from 'next/image';

const Navbar = ({
  isFirstLoaded,
  onPressStart,
  onPressReset
}: {
  isFirstLoaded: boolean;
  onPressStart: () => void;
  onPressReset: () => void;
}) => {
  return (
    <div
      className='
          w-full
          flex flex-row items-center justify-between
          mb-8 mt-4 px-20 h-14
        '
    >
      <div
        className='
          text-xl
          font-bold
        '
      >
        Hangman Game
      </div>
      <div className='flex flex-row items-center gap-4'>
        {isFirstLoaded ? (
          <button
            className='
              text-lg font-bold text-slate-300
              bg-slate-900 p-2 px-8 rounded-lg
              active:bg-slate-800
            '
            onClick={onPressStart}
          >
            Start
          </button>
        ) : (
          <button
            className='
          flex justify-center items-center
          active:rotate-180
          duration-300
        '
            onClick={onPressReset}
          >
            <Image src='/images/recycle.png' width={28} height={28} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

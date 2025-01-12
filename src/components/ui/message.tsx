'use client';

import { useRef } from 'react';

import useGame from '@/context/GameContext/UseGame';

import Confetti, { ConfettiRef } from '../ui/confetti';
import LetterPullup from '../ui/letterPullup';

export const Message = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  const { state } = useGame();
  const { message, currentPlayer } = state;

  const colors: { [key: number]: string } = {
    1: 'text-red-400',
    2: 'text-yellow-400',
  };

  const textColorClass = currentPlayer ? colors[currentPlayer] : 'bg-white';

  return (
    message && (
      <>
        <LetterPullup className={textColorClass} words={message} />
        <Confetti
          ref={confettiRef}
          className='absolute left-0 top-0 z-0 size-full'
          options={{
            get angle() {
              return Math.random() * 360;
            },
          }}
          onMouseEnter={() => {
            confettiRef.current?.fire({});
          }}
        />
      </>
    )
  );
};

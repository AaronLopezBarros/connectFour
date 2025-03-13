'use client';

import { useRef } from 'react';

import Confetti, { ConfettiRef } from '@/components/ui/confetti';
import LetterPullup from '@/components/ui/letterPullup';
import useGame from '@/context/GameContext/UseGame';

const Message = () => {
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
      <div className='portrait:mb-4'>
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
            confettiRef.current?.fire();
          }}
        />
      </div>
    )
  );
};

export default Message;

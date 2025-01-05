'use client';

import { useContext } from 'react';

import { GameContext } from '@/context/GameContext';
import { GAME_TYPES } from '@/reducer/types';

import { Board } from '../Board/Board';
import { Message } from '../ui/message';
import ShinyButton from '../ui/shinyButton';

const { START_GAME, END_GAME } = GAME_TYPES;

const ConnectFour = () => {
  const { state, dispatch } = useContext(GameContext);
  const { gameOver, message, board } = state;

  const buttonChildren = gameOver ? 'New game' : 'End game';

  return (
    <section className='flex h-full items-center justify-center gap-6'>
      <div className='text-center'>
        <div>{message && <Message message={message || ''} />}</div>
        <ShinyButton onClick={() => dispatch && dispatch({ type: gameOver ? START_GAME : END_GAME })}>
          {buttonChildren}
        </ShinyButton>
      </div>
      {!gameOver && <Board board={board} />}
    </section>
  );
};

export default ConnectFour;

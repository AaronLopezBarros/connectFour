'use client';

import { useReducer } from 'react';

import { Board } from '../Board/Board';

import { gameReducer, initialGameState } from '@/reducer/gameReducer';
import { GAME_TYPES } from '@/reducer/types';
import { PlayType } from './ConnectFourType';
import ShinyButton from '../ui/shinyButton';
import LetterPullup from '../ui/letterPullup';

const { PLAYER_PLAY, CHECK_BOARD, START_GAME, END_GAME } = GAME_TYPES;

const ConnectFour = () => {
  const [gameState, dispatchGameState] = useReducer(gameReducer, initialGameState);
  const { gameOver, message, board, currentPlayer } = gameState;

  const play = ({ rowIndex, cellIndex, currentPlayer }: PlayType) => {
    dispatchGameState({ type: PLAYER_PLAY, payload: { rowIndex, cellIndex, currentPlayer } });
    dispatchGameState({ type: CHECK_BOARD, payload: { rowIndex, cellIndex, currentPlayer } });
  };

  const buttonChildren = gameOver ? 'New game' : 'End game';

  return (
    <section className='flex h-full items-center justify-center gap-6'>
      <div className='text-center'>
        {message && <LetterPullup words={message || ''} />}
        <ShinyButton onClick={() => dispatchGameState({ type: gameOver ? START_GAME : END_GAME })}>
          {buttonChildren}
        </ShinyButton>
      </div>
      {!gameOver && <Board board={board} currentPlayer={currentPlayer} play={play} />}
    </section>
  );
};

export default ConnectFour;

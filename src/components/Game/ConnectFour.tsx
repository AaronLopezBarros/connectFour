'use client';

import { useReducer } from 'react';

import { Board } from '../Board/Board';

import { gameReducer, initialGameState } from '@/reducer/gameReducer';
import { GAME_TYPES } from '@/reducer/types';
import { PlayType } from './ConnectFourType';

const { PLAYER_PLAY, CHECK_BOARD, START_GAME } = GAME_TYPES;

const ConnectFour = () => {
  const [gameState, dispatchGameState] = useReducer(gameReducer, initialGameState);
  const { gameOver } = gameState;

  const play = ({ rowIndex, cellIndex, currentPlayer }: PlayType) => {
    dispatchGameState({ type: PLAYER_PLAY, payload: { rowIndex, cellIndex, currentPlayer } });
    dispatchGameState({ type: CHECK_BOARD, payload: { rowIndex, cellIndex, currentPlayer } });
  };

  return (
    <>
      <button onClick={() => dispatchGameState({ type: START_GAME, payload: {} })}>Jugar Ya</button>
      {!gameOver && <Board board={gameState.board} currentPlayer={gameState.currentPlayer} play={play} />}
    </>
  );
};

export default ConnectFour;

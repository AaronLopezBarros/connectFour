'use client';

import React, { useReducer } from 'react';

import Cell from '../Board/Cell';
import { GAME_TYPES } from '@/reducer/types';
import { gameReducer, initialGameState } from '@/reducer/gameReducer';

const { PLAYER_PLAY, CHECK_BOARD } = GAME_TYPES;

const ConnectFour = () => {
  const [gameState, dispatchGameState] = useReducer(gameReducer, initialGameState);
  const { currentPlayer, gameOver } = gameState;

  const play = ({
    rowIndex,
    cellIndex,
    currentPlayer,
  }: {
    rowIndex: number;
    cellIndex: number;
    currentPlayer: number;
  }) => {
    dispatchGameState({ type: PLAYER_PLAY, payload: { rowIndex, cellIndex, currentPlayer } });
    dispatchGameState({ type: CHECK_BOARD, payload: { rowIndex, cellIndex, currentPlayer } });
  };
  console.log(gameOver);
  return (
    <div className='flex h-full items-center justify-center'>
      <table className='h-[500px] w-[600px] border-8 border-cyan-400'>
        <tbody>
          {gameState.board.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map((cell: null | number, cellIndex: number) => (
                  <Cell key={cellIndex} onClick={() => play({ rowIndex, cellIndex, currentPlayer })} value={cell} />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ConnectFour;

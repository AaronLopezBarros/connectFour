'use client';

import React from 'react';
import { useReducer } from 'react';

import { ConnectFourStateType } from './ConnectFour';
import Cell from '../Board/Cell';

const ConnectFour = () => {
  const gameReducer = (
    state: ConnectFourStateType,
    action: {
      type: string;
      payload?: { [key: string]: number };
    },
  ) => {
    if (action.type === 'player_play') {
      if (action.payload) {
        const { rowIndex, cellIndex } = action.payload;
        if (!state.board[rowIndex][cellIndex]) {
          state.board[rowIndex][cellIndex] = state.currentPlayer;
          state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
        }

        return { ...state };
      }
    }

    return state;
  };

  const initialGameState: ConnectFourStateType = {
    player1: 1,
    player2: 2,
    currentPlayer: 1,
    board: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ],
    gameOver: false,
  };

  const [gameState, dispatchGameState] = useReducer(gameReducer, initialGameState);
  console.log(gameState.board);
  return (
    <div className='flex h-full items-center justify-center'>
      <table className='h-[500px] w-[600px] border-8 border-cyan-400'>
        <tbody>
          {gameState.board.map((row, rowIndex) => {
            return (
              <tr>
                {row.map((cell: null | number, cellIndex: number) => (
                  <Cell
                    onClick={() => dispatchGameState({ type: 'player_play', payload: { rowIndex, cellIndex } })}
                    value={cell}
                  />
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

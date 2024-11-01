'use client';

import React from 'react';
import { useReducer } from 'react';

import { ConnectFourStateType } from './ConnectFour';

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
  console.log(gameState);
  return (
    <div>
      <table>
        <tbody>
          {gameState.board.map((row, rowIndex) => {
            console.log(row, rowIndex);
            return (
              <tr>
                {row.map((cell: null | number, cellIndex: number) => (
                  <td
                    onClick={() => {
                      dispatchGameState({ type: 'player_play', payload: { rowIndex, cellIndex } });
                    }}
                    className='cursor-pointer border'
                  >
                    {cell ? cell : 'pepe'}
                  </td>
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

'use client';

import React from 'react';
import { useReducer } from 'react';

import { ConnectFourStateType } from './ConnectFour';

const ConnectFour = () => {
  const gameReducer = (
    state: ConnectFourStateType,
    action: {
      type: string;
      payload?: ConnectFourStateType;
    },
  ) => {
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
          {gameState.board.map((row, i) => {
            return (
              <tr>
                {row.map(cell => (
                  <td>Pepe</td>
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

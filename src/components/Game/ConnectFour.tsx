'use client';

import React from 'react';
import { useReducer } from 'react';

import Cell from '../Board/Cell';
import { gameReducer, initialGameState } from '@/reducer/gameReducer';

const ConnectFour = () => {
  const [gameState, dispatchGameState] = useReducer(gameReducer, initialGameState);

  return (
    <div className='flex h-full items-center justify-center'>
      <table className='h-[500px] w-[600px] border-8 border-cyan-400'>
        <tbody>
          {gameState.board.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map((cell: null | number, cellIndex: number) => (
                  <Cell
                    key={cellIndex}
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

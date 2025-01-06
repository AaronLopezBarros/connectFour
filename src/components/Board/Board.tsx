'use client';

import useGame from '@/context/GameContext/UseGame';

import Cell from './Cell';
import { Selector } from './Selector';
import { NeonGradientCard } from '../ui/neonGradientCard';

export const Board = () => {
  const { state } = useGame();
  const { gameOver, board } = state;

  return (
    !gameOver && (
      <div>
        <div className='flex'>
          <Selector />
        </div>
        <div className='flex h-full items-center justify-center'>
          <NeonGradientCard
            neonColors={{ firstColor: '#f87171', secondColor: '#facc15' }}
            borderSize={10}
            className='h-fit max-w-2xl'
          >
            <table className='h-[500px] w-[600px] border border-cyan-400'>
              <tbody>
                {board.map((row, rowIndex) => {
                  return (
                    <tr key={rowIndex}>
                      {row.map((cell: null | number, cellIndex: number) => (
                        <Cell key={cellIndex} value={cell} cellIndex={cellIndex} />
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </NeonGradientCard>
        </div>
      </div>
    )
  );
};

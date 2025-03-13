'use client';

import Cell from '@/components/Board/Cell';
import Selector from '@/components/Board/Selector';
import NeonGradientCard from '@/components/ui/neonGradientCard';
import useGame from '@/context/GameContext/UseGame';

const Board = () => {
  const { state } = useGame();
  const { gameOver, board } = state;

  return (
    !gameOver && (
      <div>
        <div className='flex'>
          <Selector />
        </div>
        <div className='flexitems-center w-fit justify-center'>
          <NeonGradientCard
            neonColors={{ firstColor: '#f87171', secondColor: '#facc15' }}
            borderSize={10}
            className='h-fit w-fit sm:max-w-2xl'
          >
            <table className='h-fit w-fit border border-cyan-400 lg:h-[500px] lg:w-[600px]'>
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

export default Board;

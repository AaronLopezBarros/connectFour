import React, { useContext } from 'react';

import { GameContext } from '@/context/GameContext/GameContext';
import { getGridColByIndex } from '@/lib/utils';

import { Arrow } from './Arrow';

export const Selector = () => {
  const { state } = useContext(GameContext);
  const { board, selectedColumn } = state;

  return (
    <div className='grid min-h-[100px] w-[600px] grid-cols-7'>
      {board[0].map((col, index) => {
        const column = getGridColByIndex(index);
        return <Arrow key={index} column={column} isVisible={selectedColumn === column} />;
      })}
    </div>
  );
};

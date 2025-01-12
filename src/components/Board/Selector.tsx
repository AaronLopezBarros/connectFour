import React, { useContext } from 'react';

import { GameContext } from '@/context/GameContext/GameContext';
import { getColumnByIndex } from '@/lib/utils';

import { Arrow } from './Arrow';

export const Selector = () => {
  const { state } = useContext(GameContext);
  const { board, selectedColumn } = state;
  const columns = board[0];

  const renderArrows = () =>
    columns.map((_, index) => {
      const column = getColumnByIndex(index);
      const isVisible = selectedColumn === column;
      return <Arrow key={index} column={column} isVisible={isVisible} />;
    });

  return <div className='grid min-h-[100px] w-[600px] grid-cols-7'>{renderArrows()}</div>;
};

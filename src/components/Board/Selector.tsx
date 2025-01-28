import React from 'react';

import useGame from '@/context/GameContext/UseGame';
import { getColumnByIndex } from '@/lib/utils';

import { Arrow } from './Arrow';

export const Selector = () => {
  const { state } = useGame();
  const { board, selectedColumn } = state;
  const columns = board[0];

  const renderArrows = () =>
    columns.map((_, index) => {
      const column = getColumnByIndex(index);
      const isVisible = selectedColumn === column;
      return <Arrow key={index} column={column} isVisible={isVisible} />;
    });

  return <div className='grid w-full grid-cols-7'>{renderArrows()}</div>;
};

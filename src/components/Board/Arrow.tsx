import { useContext } from 'react';

import { GameContext } from '@/context/GameContext/GameContext';
import { playerColor } from '@/lib/contst';

export const Arrow: React.FC = () => {
  const { state } = useContext(GameContext);
  const { selectedColumn, currentPlayer } = state;

  const paintArrow = () => {
    return currentPlayer ? `border-t-${playerColor[currentPlayer]}-400` : 'bg-white';
  };

  return (
    selectedColumn && (
      <div
        className={`${paintArrow()} mb-5 grid h-0 w-0 animate-bounce border-l-[42px] border-r-[42px] border-t-[80px] border-transparent transition-all delay-100 ease-in-out`}
        style={{ gridColumnStart: selectedColumn }}
      ></div>
    )
  );
};

import { useContext } from 'react';

import { GameContext } from '@/context/GameContext/GameContext';

export const Arrow: React.FC = () => {
  const { state } = useContext(GameContext);
  const { selectedColumn, currentPlayer } = state;

  const paintBackground = () => {
    const colors: { [key: number]: string } = {
      1: 'border-t-red-400',
      2: 'border-t-yellow-400',
    };

    return currentPlayer ? colors[currentPlayer] : 'bg-white';
  };

  return (
    selectedColumn && (
      <div
        className={`${paintBackground()} mb-5 grid h-0 w-0 animate-bounce border-l-[42px] border-r-[42px] border-t-[80px] border-transparent transition-all ease-in-out`}
        style={{ gridColumnStart: selectedColumn }}
      ></div>
    )
  );
};

import { useContext } from 'react';

import { GameContext } from '@/context/GameContext/GameContext';
import { colors } from '@/lib/contst';
import { cn } from '@/lib/utils';

type ArrowProps = {
  column: number;
  isVisible: boolean;
};

export const Arrow = ({ column, isVisible }: ArrowProps) => {
  const { state } = useContext(GameContext);
  const { currentPlayer } = state;

  const arrowColor = currentPlayer ? colors[currentPlayer] : 'bg-white';
  const visibility = isVisible ? 'visible' : 'hidden';

  return (
    <div
      className={cn(
        'mb-5 grid h-0 w-0 animate-bounce border-l-[42px] border-r-[42px] border-t-[80px] border-transparent',
        isVisible && 'transition-all delay-100 ease-in-out',
      )}
      style={{ gridColumnStart: column, borderTopColor: arrowColor, visibility: visibility }}
    ></div>
  );
};

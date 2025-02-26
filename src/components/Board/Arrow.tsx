import useGame from '@/context/GameContext/UseGame';
import { colors } from '@/lib/contst';
import { cn } from '@/lib/utils';

type ArrowProps = {
  column: number;
  isVisible: boolean;
};

export const Arrow = ({ column, isVisible }: ArrowProps) => {
  const { state } = useGame();
  const { currentPlayer } = state;

  const arrowColor = currentPlayer ? colors[currentPlayer] : 'bg-white';
  const visibility = isVisible ? 'visible' : 'hidden';

  return (
    <div
      className={cn(
        'mb-5 grid h-0 w-0 animate-bounce border-l-[21px] border-r-[21px] border-t-[40px] border-transparent lg:border-l-[42px] lg:border-r-[42px] lg:border-t-[80px]',
        isVisible && 'transition-all ease-in-out',
      )}
      style={{ gridColumnStart: column, borderTopColor: arrowColor, visibility: visibility }}
    ></div>
  );
};

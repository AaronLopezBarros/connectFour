import useGame from '@/context/GameContext/UseGame';
import { GAME_TYPES } from '@/reducer/types';
import { PlayType } from '@/types/GameTypes';

const { PLAYER_PLAY, CHECK_BOARD, SELECT_COLUMN } = GAME_TYPES;

const Cell = ({ value, cellIndex }: { value: null | number; cellIndex: number }) => {
  const { state, dispatch } = useGame();
  const { currentPlayer } = state;

  const paintBackground = () => {
    const colors: { [key: number]: string } = {
      1: 'bg-red-400',
      2: 'bg-yellow-400',
    };

    return value ? colors[value] : 'bg-white';
  };

  const play = ({ cellIndex, currentPlayer }: PlayType) => {
    if (dispatch) {
      dispatch({ type: PLAYER_PLAY, payload: { cellIndex, currentPlayer } });
      dispatch({ type: CHECK_BOARD, payload: { cellIndex, currentPlayer } });
    }
  };

  return (
    <td
      onMouseEnter={() => dispatch && dispatch({ type: SELECT_COLUMN, payload: { cellIndex } })}
      onClick={() => play({ cellIndex, currentPlayer })}
      className='h-12 w-12 cursor-pointer border bg-cyan-400'
    >
      <div className={`${paintBackground()} h-full w-full rounded-full transition-all delay-100 ease-in-out`}></div>
    </td>
  );
};

export default Cell;

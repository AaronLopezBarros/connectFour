import useGame from '@/context/GameContext/UseGame';
import { PlayType } from '@/context/GameTypes';
import { colors } from '@/lib/contst';
import { GAME_TYPES } from '@/reducer/types';

const { PLAYER_PLAY, CHECK_BOARD, SELECT_COLUMN, CLEAR_SELECT } = GAME_TYPES;

const Cell = ({ value, cellIndex }: { value: null | number; cellIndex: number }) => {
  const { state, dispatch } = useGame();
  const { currentPlayer } = state;

  const paintBackground = () => {
    return value ? colors[value] : 'white';
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
      onMouseLeave={() => dispatch && dispatch({ type: CLEAR_SELECT })}
      onClick={() => play({ cellIndex, currentPlayer })}
      className='h-12 w-12 cursor-pointer border bg-cyan-400'
    >
      <div
        style={{ backgroundColor: paintBackground() }}
        className={`h-full w-full rounded-full transition-all delay-100 ease-in-out`}
      ></div>
    </td>
  );
};

export default Cell;

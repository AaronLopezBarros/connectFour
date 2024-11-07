import { ConnectFourStateType } from '@/components/Game/ConnectFour';
import { GAME_TYPES } from './types';

const { PLAYER_PLAY } = GAME_TYPES;

export const initialGameState: ConnectFourStateType = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  gameOver: false,
};

export const gameReducer = (
  state: ConnectFourStateType,
  action: {
    type: string;
    payload: { [key: string]: number };
  },
) => {
  const { rowIndex, cellIndex, currentPlayer } = action.payload;

  if (action.type === PLAYER_PLAY) {
    for (let i = 5; i >= 0; i--) {
      if (!state.board[i][cellIndex] && currentPlayer === state.currentPlayer) {
        state.board[i][cellIndex] = state.currentPlayer;
        state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
        break;
      }
    }

    return { ...state };
  }

  return state;
};

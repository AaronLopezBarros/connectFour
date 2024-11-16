import { ConnectFourType } from '@/components/Game/ConnectFourType';
import { GAME_TYPES } from './types';
import { checkBoard, playTurn } from './actions';

const { PLAYER_PLAY, CHECK_BOARD, START_GAME } = GAME_TYPES;

export const initialGameState: ConnectFourType = {
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
  gameOver: true,
};

export const gameReducer = (
  state: ConnectFourType,
  action: {
    type: string;
    payload: { [key: string]: number };
  },
): ConnectFourType => {
  const { cellIndex, currentPlayer } = action.payload;

  if (action.type === PLAYER_PLAY) {
    return playTurn({ state, currentPlayer, cellIndex });
  }

  if (action.type === CHECK_BOARD) {
    return checkBoard(state);
  }

  if (action.type === START_GAME) {
    return { ...state, gameOver: false };
  }

  return state;
};

import { ConnectFourType } from '@/components/Game/ConnectFourType';
import { GAME_TYPES } from './types';

const { PLAYER_PLAY, CHECK_BOARD } = GAME_TYPES;

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
  gameOver: false,
};

export const gameReducer = (
  state: ConnectFourType,
  action: {
    type: string;
    payload: { [key: string]: number };
  },
): ConnectFourType => {
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

  if (action.type === CHECK_BOARD) {
    for (let i = 0; i < state.board.length; i++) {
      for (let j = 0; j <= state.board[i].length - 4; j++) {
        if (state.board[i][j]) {
          if (
            state.board[i][j] === state.board[i][j + 1] &&
            state.board[i][j] === state.board[i][j + 2] &&
            state.board[i][j] === state.board[i][j + 3]
          ) {
            return { ...state, gameOver: true };
          }
        }
      }
    }

    for (let j = 0; j < state.board[0].length; j++) {
      for (let i = 0; i <= state.board.length - 4; i++) {
        if (state.board[i][j]) {
          if (
            state.board[i][j] === state.board[i + 1][j] &&
            state.board[i][j] === state.board[i + 2][j] &&
            state.board[i][j] === state.board[i + 3][j]
          ) {
            return { ...state, gameOver: true };
          }
        }
      }
    }

    return state;
  }

  return state;
};

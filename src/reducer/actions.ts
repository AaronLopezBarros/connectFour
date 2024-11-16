import { ConnectFourType } from '@/components/Game/ConnectFourType';

type PlayTurnType = {
  state: ConnectFourType;
  currentPlayer: number;
  cellIndex: number;
};

export const playTurn = ({ state, currentPlayer, cellIndex }: PlayTurnType) => {
  for (let i = 5; i >= 0; i--) {
    if (!state.board[i][cellIndex] && currentPlayer === state.currentPlayer) {
      state.board[i][cellIndex] = state.currentPlayer;
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
      break;
    }
  }
  return { ...state };
};

export const checkBoard = (state: ConnectFourType) => {
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
};

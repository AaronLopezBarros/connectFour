import { ConnectFourStateType } from "@/components/Game/ConnectFour";

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

export  const gameReducer = (
    state: ConnectFourStateType,
    action: {
      type: string;
      payload?: { [key: string]: number };
    },
  ) => {
    if (action.type === 'player_play') {
      if (action.payload) {
        const { rowIndex, cellIndex } = action.payload;
        if (!state.board[rowIndex][cellIndex]) {
          state.board[rowIndex][cellIndex] = state.currentPlayer;
          state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
        }

        return { ...state };
      }
    }

    return state;
  };
import { ConnectFourType } from '@/components/Game/ConnectFourType';
import { GAME_TYPES } from './types';
import { checkBoard, playTurn } from './actions';

const { PLAYER_PLAY, CHECK_BOARD, START_GAME, END_GAME } = GAME_TYPES;

// Helper function to initialize a blank board
const createEmptyBoard = (): (number[] | null[])[] => {
  return Array.from({ length: 6 }, () => Array(7).fill(null));
};

export const initialGameState: ConnectFourType = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  board: createEmptyBoard(),
  gameOver: true,
  message: null,
};

export const gameReducer = (
  state: ConnectFourType,
  action: { type: string; payload?: { cellIndex: number; currentPlayer: number } },
): ConnectFourType => {
  const { payload } = action;

  if (payload) {
    const { cellIndex, currentPlayer } = payload;

    switch (action.type) {
      case PLAYER_PLAY:
        return playTurn({ state, currentPlayer, cellIndex });
      case CHECK_BOARD:
        return checkBoard(state, currentPlayer);
      default:
        return state;
    }
  }

  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameOver: false,
        message: null,
        board: createEmptyBoard(),
        currentPlayer: 1,
      };
    case END_GAME:
      return { ...state, gameOver: true };
    default:
      return state;
  }
};

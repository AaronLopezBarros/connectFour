import { ConnectFourType, GameAction } from '@/context/GameTypes';
import { getColumnByIndex } from '@/lib/utils';
import { checkBoard, playTurn } from '@/reducer/actions';
import { GAME_TYPES } from '@/reducer/types';

const { PLAYER_PLAY, CHECK_BOARD, START_GAME, END_GAME, SELECT_COLUMN, CLEAR_SELECT } = GAME_TYPES;

// Helper function to initialize a blank board
const createEmptyBoard = (): (number[] | null[])[] => {
  return Array.from({ length: 6 }, () => Array(7).fill(null));
};

export const initialGameState: ConnectFourType = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  selectedColumn: null,
  board: createEmptyBoard(),
  gameOver: true,
  message: null,
};

export const gameReducer = (state: ConnectFourType, action: GameAction): ConnectFourType => {
  if (action.payload) {
    const { cellIndex, currentPlayer } = action.payload;

    switch (action.type) {
      case PLAYER_PLAY:
        return playTurn({ state, currentPlayer: currentPlayer || state.currentPlayer, cellIndex });
      case CHECK_BOARD:
        return checkBoard(state, currentPlayer || state.currentPlayer);
      case SELECT_COLUMN:
        return { ...state, selectedColumn: getColumnByIndex(cellIndex) };
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
    case CLEAR_SELECT:
      return { ...state, selectedColumn: null };
    default:
      return state;
  }
};

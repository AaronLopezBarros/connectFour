import { GAME_TYPES } from '@/reducer/types';

const { PLAYER_PLAY, CHECK_BOARD, START_GAME, END_GAME } = GAME_TYPES;

export type ConnectFourType = {
  player1: number;
  player2: number;
  currentPlayer: number;
  board: (null[] | number[])[];
  gameOver: boolean;
  message: string | null;
};

export type GameAction =
  | { type: typeof PLAYER_PLAY; payload: { cellIndex: number; currentPlayer: number } }
  | { type: typeof CHECK_BOARD; payload: { cellIndex: number; currentPlayer: number } }
  | { type: typeof START_GAME }
  | { type: typeof END_GAME };

export type PlayType = {
  cellIndex: number;
  currentPlayer: number;
};

export type PlayTurnType = {
  state: ConnectFourType;
  currentPlayer: number;
  cellIndex: number;
};

import { GAME_TYPES } from '@/reducer/types';

export type ConnectFourType = {
  player1: number;
  player2: number;
  currentPlayer: number;
  selectedColumn: number | null;
  board: (null[] | number[])[];
  gameOver: boolean;
  message: string | null;
};

export type GameAction = {
  type: (typeof GAME_TYPES)[keyof typeof GAME_TYPES];
  payload?: { cellIndex: number; currentPlayer?: number };
};

export type PlayType = {
  cellIndex: number;
  currentPlayer: number;
};

export type PlayTurnType = {
  state: ConnectFourType;
  currentPlayer: number;
  cellIndex: number;
};

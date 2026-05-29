export const GAME_TYPES = {
  PLAYER_PLAY: 'player_play',
  CHECK_BOARD: 'check_board',
  START_GAME: 'start_game',
  END_GAME: 'end_game',
  SELECT_COLUMN: 'select_column',
  CLEAR_SELECT: 'clear_select',
} as const;

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

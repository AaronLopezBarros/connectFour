export type ConnectFourType = {
  player1: number;
  player2: number;
  currentPlayer: number;
  board: (null[] | number[])[];
  gameOver: boolean;
  message: string | null;
};

export type PlayType = {
  rowIndex: number;
  cellIndex: number;
  currentPlayer: number;
};

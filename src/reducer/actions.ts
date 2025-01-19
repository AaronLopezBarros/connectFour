import { ConnectFourType, PlayTurnType } from '@/context/GameTypes';
import { playerColor } from '@/lib/contst';

// Function to check if a player has four connected pieces in a given direction
const checkWinningLine = (
  board: (number[] | null[])[],
  startRow: number,
  startCol: number,
  direction: [number, number],
  player: number,
): boolean => {
  const [deltaRow, deltaCol] = direction;

  // Check all 4 positions in the given direction
  for (let i = 0; i < 4; i++) {
    const row = startRow + deltaRow * i;
    const col = startCol + deltaCol * i;

    // Check if the position is out of bounds or if the piece is not the player's
    if (row < 0 || row >= board.length || col < 0 || col >= board[row].length || board[row][col] !== player) {
      return false;
    }
  }

  return true;
};

// Function to play a turn by placing a piece on the board
export const playTurn = ({ state, currentPlayer, cellIndex }: PlayTurnType) => {
  // Find the first available row in the selected column to place the piece
  for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
    if (!state.board[rowIndex][cellIndex] && currentPlayer === state.currentPlayer) {
      // Place the piece and switch to the other player
      state.board[rowIndex][cellIndex] = currentPlayer;
      state.currentPlayer = currentPlayer === 1 ? 2 : 1;

      break;
    }
  }

  // Return the updated state (copying to avoid direct mutation)
  return { ...state };
};

// Function to check if the current player has won
export const checkBoard = (state: ConnectFourType, currentPlayer: number) => {
  const directions: [number, number][] = [
    [0, 1], // Horizontal
    [1, 0], // Vertical
    [1, 1], // Descending diagonal
    [1, -1], // Ascending diagonal
  ];

  // Iterate through each cell on the board
  for (let rowIndex = 0; rowIndex < state.board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < state.board[rowIndex].length; colIndex++) {
      // If the current cell has the current player's piece
      if (state.board[rowIndex][colIndex] === currentPlayer) {
        // Check all directions for a winning line
        for (const direction of directions) {
          if (checkWinningLine(state.board, rowIndex, colIndex, direction, currentPlayer)) {
            // Return updated state indicating the game is over and the current player has won
            return {
              ...state,
              gameOver: true,
              currentPlayer: currentPlayer,
              message: `Player ${playerColor[currentPlayer]} wins!`,
            };
          }
        }
      }
    }
  }

  // Chek for a draw
  const allFilled = state.board.every(row => row.every(cell => cell !== null));
  if (allFilled) {
    return {
      ...state,
      gameOver: true,
      message: `It is a draw!!`,
    };
  }

  // If no winner found, return the state unchanged
  return state;
};

export type ConnectFourStateType = {
    player1: number,
    player2: number,
    currentPlayer: number,
    board: (null[] | number[])[],
    gameOver: false,
}
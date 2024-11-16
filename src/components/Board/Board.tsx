import Cell from './Cell';

import { ConnectFourType, PlayType } from '../Game/ConnectFourType';

type BoardType = Pick<ConnectFourType, 'board' | 'currentPlayer'> & {
  play: ({ rowIndex, cellIndex, currentPlayer }: PlayType) => void;
};

export const Board = ({ board, currentPlayer, play }: BoardType) => {
  return (
    <div className='flex h-full items-center justify-center'>
      <table className='h-[500px] w-[600px] border-8 border-cyan-400'>
        <tbody>
          {board.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map((cell: null | number, cellIndex: number) => (
                  <Cell key={cellIndex} onClick={() => play({ rowIndex, cellIndex, currentPlayer })} value={cell} />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

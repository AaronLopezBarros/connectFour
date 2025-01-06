import { StartGameButton } from './StartGameButton';
import { Board } from '../Board/Board';
import { Message } from '../ui/message';

const ConnectFour = () => {
  return (
    <section className='flex h-full items-center justify-center gap-6'>
      <div className='text-center'>
        <Message />
        <StartGameButton />
      </div>
      <Board />
    </section>
  );
};

export default ConnectFour;

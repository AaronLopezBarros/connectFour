import Board from '@/components/Board/Board';
import StartGameButton from '@/components/Game/StartGameButton';
import Message from '@/components/ui/message';

const ConnectFour = () => {
  return (
    <section className='flex h-full items-center justify-center gap-6 portrait:flex-col'>
      <div className='text-center'>
        <Message />
        <StartGameButton />
      </div>
      <Board />
    </section>
  );
};

export default ConnectFour;

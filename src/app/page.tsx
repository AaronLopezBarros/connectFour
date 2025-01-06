import ConnectFour from '@/components/Game/ConnectFour';
import { GameProvider } from '@/context/GameContext/GameProvider';

export default function Home() {
  return (
    <GameProvider>
      <ConnectFour />
    </GameProvider>
  );
}

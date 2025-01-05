import ConnectFour from '@/components/Game/ConnectFour';
import { GameProvider } from '@/context/GameContext';

export default function Home() {
  return (
    <GameProvider>
      <ConnectFour />
    </GameProvider>
  );
}

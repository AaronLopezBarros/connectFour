import { useRef } from 'react';

import Confetti, { ConfettiRef } from '../ui/confetti';
import LetterPullup from '../ui/letterPullup';

export const Message = ({ message }: { message: string }) => {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <>
      <LetterPullup words={message} />
      <Confetti
        ref={confettiRef}
        className='absolute left-0 top-0 z-0 size-full'
        options={{
          get angle() {
            return Math.random() * 360;
          },
        }}
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </>
  );
};

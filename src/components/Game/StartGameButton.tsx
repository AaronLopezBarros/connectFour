'use client';

import useGame from '@/context/GameContext/UseGame';
import { GAME_TYPES } from '@/reducer/types';

import ShinyButton from '../ui/shinyButton';

const { START_GAME, END_GAME } = GAME_TYPES;

export const StartGameButton = () => {
  const { state, dispatch } = useGame();
  const { gameOver } = state;

  const buttonChildren = gameOver ? 'New game' : 'End game';

  return (
    <ShinyButton onClick={() => dispatch && dispatch({ type: gameOver ? START_GAME : END_GAME })}>
      {buttonChildren}
    </ShinyButton>
  );
};

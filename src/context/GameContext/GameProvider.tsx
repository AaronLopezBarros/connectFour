'use client';

import { ReactNode, useReducer } from 'react';

import { GameContext } from '@/context/GameContext/GameContext';
import { gameReducer, initialGameState } from '@/reducer/gameReducer';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

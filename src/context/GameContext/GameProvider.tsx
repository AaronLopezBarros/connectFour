'use client';

import { ReactNode, useReducer } from 'react';

import { gameReducer, initialGameState } from '@/reducer/gameReducer';

import { GameContext } from './GameContext';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

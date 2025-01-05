'use client';

import { createContext, ReactNode, useReducer } from 'react';

import { gameReducer, initialGameState } from '@/reducer/gameReducer';

import { ConnectFourType, GameAction } from './GameTypes';

const GameContext = createContext<{
  state: ConnectFourType;
  dispatch: React.Dispatch<GameAction> | undefined;
}>({ state: initialGameState, dispatch: undefined });

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };

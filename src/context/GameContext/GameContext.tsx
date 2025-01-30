'use client';

import { createContext } from 'react';

import { ConnectFourType, GameAction } from '@/context/GameTypes';
import { initialGameState } from '@/reducer/gameReducer';

export const GameContext = createContext<{
  state: ConnectFourType;
  dispatch: React.Dispatch<GameAction> | undefined;
}>({ state: initialGameState, dispatch: undefined });

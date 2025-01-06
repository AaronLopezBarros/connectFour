'use client';

import { createContext } from 'react';

import { initialGameState } from '@/reducer/gameReducer';

import { ConnectFourType, GameAction } from '../../types/GameTypes';

export const GameContext = createContext<{
  state: ConnectFourType;
  dispatch: React.Dispatch<GameAction> | undefined;
}>({ state: initialGameState, dispatch: undefined });

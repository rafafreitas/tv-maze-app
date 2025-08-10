import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from './index';
import { IStore } from './interfaces/IStore';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  IStore,
  Action<string>
>;

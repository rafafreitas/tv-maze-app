import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';

import { setBuilder } from './thunks';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    setBuilder(builder);
  },
});

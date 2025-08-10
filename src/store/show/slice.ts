import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';

import { getBuilder } from './thunks';

export const showSlice = createSlice({
  name: 'show',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    getBuilder(builder);
  },
});

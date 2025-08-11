import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IFavoriteState } from '@src/store/interfaces/IFavorite';
import { ITvMazeShow } from '@src/types';
import { orderByName } from '@src/helpers';

interface ISetFavorite {
  show: ITvMazeShow;
}

export const setFavorite = createAsyncThunk(
  '@favorites/setFavorite',
  async ({ show }: ISetFavorite, { rejectWithValue }) => {
    try {
      return { show: show, id: show.id };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const setFavoriteBuilder = (
  builder: ActionReducerMapBuilder<IFavoriteState>,
) => {
  builder.addCase(setFavorite.fulfilled, (state, action) => {
    if (!state.ids.includes(action.payload.id)) {
      state.favorites = orderByName([...state.favorites, action.payload.show]);

      state.ids = [...state.ids, action.payload.id];
    } else {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload.id,
      );

      state.ids = state.ids.filter(id => id !== action.payload.id);
    }
  });
};

export default setFavoriteBuilder;

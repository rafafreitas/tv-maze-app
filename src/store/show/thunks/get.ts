import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IShowState } from '@src/store/interfaces/IShow';
import { GetShows, GetShowsByName } from '@src/services';

interface IGetShow {
  page: number;
  q?: string;
}

export const getShows = createAsyncThunk(
  '@show/getShows',
  async ({ page, q }: IGetShow, { rejectWithValue }) => {
    try {
      if (q) {
        const { data } = await GetShowsByName({ page, q });

        const prepareResult = data.map(elm => elm.show);

        return { shows: prepareResult };
      }

      const { data } = await GetShows({ page });
      return { shows: data };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const getShowsBuilder = (builder: ActionReducerMapBuilder<IShowState>) => {
  builder.addCase(getShows.pending, state => {
    state.loading = true;
  });
  builder.addCase(getShows.fulfilled, (state, action) => {
    state.shows = action.payload.shows;
    state.loading = false;
  });
};

export default getShowsBuilder;

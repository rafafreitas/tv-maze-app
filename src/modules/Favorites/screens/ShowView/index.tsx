import React from 'react';
import { ITvMazeEpisode, ITvMazeShow } from '@src/types';
import { ShowViewTemplate } from '@src/components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigate } from '@src/router/actions.ts';
import { SCREENS } from '@src/router/constants';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { setFavorite } from '@src/store/favorites/thunks/set.ts';

type ScreenParam = {
  ShowView: {
    show: ITvMazeShow;
  };
};

export default function ShowFavoriteView({
  route,
}: NativeStackScreenProps<ScreenParam, 'ShowView'>) {
  const { show } = route.params;

  const dispatch = useAppDispatch();
  const { ids } = useAppSelector(state => state.favorites);

  const onFavoriteAction = () => {
    dispatch(setFavorite({ show }));
  };

  const onEpisodesViewAction = (episode: ITvMazeEpisode) => {
    navigate(SCREENS.PRIVATE.FAVORITES.EPISODE_VIEW, { episode: episode });
  };

  return (
    <ShowViewTemplate
      show={show}
      loading={false}
      isFavorite={ids.includes(show.id)}
      onFavoriteAction={onFavoriteAction}
      onEpisodesViewAction={onEpisodesViewAction}
    />
  );
}

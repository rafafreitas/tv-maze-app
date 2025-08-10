import React from 'react';
import { ITvMazeEpisode, ITvMazeShow } from '@src/types';
import { ShowViewTemplate } from '@src/components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigate } from '@src/router/actions.ts';
import { SCREENS } from '@src/router/constants';

type ScreenParam = {
  ShowView: {
    show: ITvMazeShow;
  };
};

export default function ShowView({
  route,
}: NativeStackScreenProps<ScreenParam, 'ShowView'>) {
  const { show } = route.params;

  const onFavoriteAction = () => {
    //
  };

  const onEpisodesViewAction = (episode: ITvMazeEpisode) => {
    navigate(SCREENS.PRIVATE.HOME.EPISODE_VIEW, { episode: episode });
  };

  return (
    <ShowViewTemplate
      show={show}
      loading={false}
      isFavorite={false}
      onFavoriteAction={onFavoriteAction}
      onEpisodesViewAction={onEpisodesViewAction}
    />
  );
}

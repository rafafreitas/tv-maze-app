import React from 'react';
import { EpisodeViewTemplate } from '@src/components';
import { ITvMazeEpisode } from '@src/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenParam = {
  EpisodeView: {
    episode: ITvMazeEpisode;
  };
};

export default function EpisodeView({
  route,
}: NativeStackScreenProps<ScreenParam, 'EpisodeView'>) {
  const { episode } = route.params;

  return <EpisodeViewTemplate episode={episode} />;
}

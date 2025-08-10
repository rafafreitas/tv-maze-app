import React from 'react';
import { ShowViewTemplate } from '@src/components';
import { ITvMazeShow } from '@src/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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

  return (
    <ShowViewTemplate
      show={show}
      loading={false}
      isFavorite={false}
      onFavoriteAction={onFavoriteAction}
    />
  );
}

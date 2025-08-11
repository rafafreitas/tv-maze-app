import { Dimensions } from 'react-native';
import { ITvMazeShow } from '@src/types';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

export const resizeImage = (newWidth: number | null) => {
  const originalWidth = 680;
  const originalHeight = 1000;

  const preparedWidth = newWidth || SCREEN_WIDTH;

  const newHeight = originalHeight * (preparedWidth / originalWidth);
  return {
    width: preparedWidth,
    height: newHeight,
  };
};

export const orderByName = (show: ITvMazeShow[]): ITvMazeShow[] => {
  return show.sort((a, b) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
  );
};

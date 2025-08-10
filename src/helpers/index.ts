import { Dimensions } from 'react-native';

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

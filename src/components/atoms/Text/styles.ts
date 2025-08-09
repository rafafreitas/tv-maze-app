import { StyleSheet } from 'react-native';
import { THEME, TVariants } from '@src/constants';

interface IStyledText {
  variant: TVariants;
  bold: boolean;
  center: boolean;
  justify: boolean;
  fontSize: number;
  textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
}

export const TextStyle = ({
  center,
  justify,
  fontSize,
  variant,
  bold,
  textTransform,
}: IStyledText) => {
  return StyleSheet.create({
    textStyle: {
      color: THEME[variant],
      textAlign: center ? 'center' : justify ? 'justify' : 'left',
      fontWeight: bold ? '700' : '400',
      fontSize,
      textTransform,
    },
  });
};

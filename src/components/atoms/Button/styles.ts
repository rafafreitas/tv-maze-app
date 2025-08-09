import { StyleSheet } from 'react-native';
import { TVariants, THEME } from '@src/constants';

type TButtonTypes = 'FILLED' | 'OUTLINE' | 'TEXT';
type TButtonSizes = 'NORMAL' | 'SMALL';

interface IButton {
  variant: TVariants;
  type: TButtonTypes;
  size: TButtonSizes;
  disabled: boolean;
}

export const ButtonStyle = ({ variant, disabled, size, type }: IButton) => {
  const background =
    type === 'FILLED'
      ? disabled
        ? THEME.gray
        : THEME[variant]
      : 'transparent';

  const border =
    type === 'OUTLINE'
      ? {
          borderWidth: 1,
          borderColor: THEME[variant],
        }
      : {};

  const textColor = type === 'FILLED' ? THEME.white : THEME[variant];

  return StyleSheet.create({
    buttonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      borderRadius: 30,
      width: '100%',
      flexGrow: 1,
      height: size === 'NORMAL' ? 45 : 30,
      maxHeight: size === 'NORMAL' ? 45 : 30,
      backgroundColor: background,
      ...border,
    },

    textStyle: {
      color: textColor,
    },
  });
};

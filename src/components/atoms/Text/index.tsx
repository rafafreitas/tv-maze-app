import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { TextStyle } from './styles';
import { TVariants } from '@src/constants';

export interface IText extends TextProps {
  /**
   * Allows you to choose variations according to the theme.
   * @exampleUse variant="primary"
   */
  variant?: TVariants;

  /**
   * When activated, the component will have a bold font.
   */
  bold?: boolean;
  /**
   * When activated the component will be aligned in the center.
   */
  center?: boolean;

  /**
   *When activated the component will be aligned justify.
   */
  justify?: boolean;

  /**
   *The text-transform property specifies how to capitalize an ele It can be used to make text appear in all-uppercase or all-low
   */
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';

  /**
     Set a size for the text
     */
  fontSize?: number;

  children: any;
  style?: object;
}

const Text = ({
  bold = false,
  center = false,
  justify = false,
  fontSize = 14,
  textTransform = 'none',
  variant = 'black',
  children,
  style = {},
  ...rest
}: IText) => {
  const { textStyle } = TextStyle({
    variant,
    bold,
    fontSize,
    center,
    justify,
    textTransform,
  });

  return (
    <RNText style={{ ...textStyle, ...style }} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;

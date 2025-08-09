import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';

import Text from '@src/components/atoms/Text';
import { ButtonStyle } from './styles';
import { TVariants } from '@src/constants';

export type TButtonTypes = 'FILLED' | 'OUTLINE' | 'TEXT';

export type TButtonSizes = 'NORMAL' | 'SMALL';

export interface ICustomStyles {
  button?: ViewStyle;
  text?: TextStyle;
  icon?: ViewStyle;
}

export interface IButton extends ViewStyle {
  /**
   * Add a title on Button
   */
  title?: string;

  accessibilityLabel?: string;

  /**
   * Allows you to choose variations according to the theme.
   * @exampleUse variant="primary"
   */
  variant?: TVariants;

  /**
   * Enter the type of Button
   */
  type?: TButtonTypes;
  /**
   * Enter the size of Button
   */
  size?: TButtonSizes;
  /**
   * Callback action
   */
  onPress?: () => void;
  /**
   * When activated, the component will have a disabled state
   */
  disabled?: boolean;
  /**
   * When activated, the component will have a loading
   */
  loading?: boolean;

  /**
   * Custom styles for the button, text and icon
   */
  customStyles?: ICustomStyles;

  style?: ViewStyle;
}

const Button = ({
  title,
  accessibilityLabel,
  variant = 'primary',
  type = 'FILLED',
  size = 'NORMAL',
  onPress = () => {},
  disabled = false,
  loading = false,
  customStyles = {
    button: {},
    text: {},
    icon: {},
  },
  style,
  ...rest
}: IButton) => {
  const { buttonStyle, textStyle } = ButtonStyle({
    variant: variant,
    disabled,
    type,
    size,
  });

  return (
    <TouchableOpacity
      style={{
        ...buttonStyle,
        ...customStyles?.button,
        ...style,
      }}
      onPress={disabled ? undefined : onPress}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityRole={type === 'TEXT' ? 'link' : 'button'}
      accessibilityHint="Press here"
      accessibilityState={{ disabled }}
      disabled={disabled}
      {...rest}
    >
      {/*{iconLeft}*/}
      {!loading ? (
        <Text
          style={{
            ...textStyle,
            ...customStyles?.text,
          }}
        >
          {title}
        </Text>
      ) : (
        <ActivityIndicator
          testID="activity-indicator"
          size={size === 'SMALL' ? 'small' : 'large'}
        />
      )}
      {/*{iconRight}*/}
    </TouchableOpacity>
  );
};

export default Button;

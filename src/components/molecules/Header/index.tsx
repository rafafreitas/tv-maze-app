import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import BrandDefault from '@src/assets/brand/brand_primary.png';
import BrandWhite from '@src/assets/brand/brand_white.png';

import { THEME } from '@src/constants';
import { Text, IconArrowLeft } from '@src/components';
import { styles } from './style';

export type THeaderTypes = 'LIGHT' | 'DARK' | 'PRIMARY' | 'SECONDARY';

export interface IHeaderTop {
  type: THeaderTypes;
  withBackButton?: boolean;
  backPress?: () => void;
  withDrawerButton?: boolean;
  hasMaxWidth?: boolean;
}

const HEADER_BODY_BACKGROUND = {
  LIGHT: THEME.background,
  DARK: THEME.black,
  PRIMARY: THEME.primary,
  SECONDARY: THEME.secondary,
};

export interface IHeaderBody {
  type?: THeaderTypes;
  title?: string | React.ReactNode;
  text?: string;
  removePadding?: boolean;
  hasMaxWidth?: boolean;
}

export const HeaderTop = ({
  type = 'LIGHT',
  withBackButton,
  backPress = () => {},
  hasMaxWidth,
}: IHeaderTop) => {
  return (
    <View
      style={{
        backgroundColor: HEADER_BODY_BACKGROUND[type],
        ...styles.headerTopContainer,
      }}
    >
      <View
        style={[
          styles.headerContent,
          hasMaxWidth ? null : styles.headerContentPadding,
        ]}
      >
        <View style={styles.imageContainer}>
          {withBackButton && (
            <TouchableOpacity
              style={[styles.iconContainer, styles.backMenu]}
              onPress={backPress}
            >
              <IconArrowLeft color={THEME.black} />
            </TouchableOpacity>
          )}
          <Image
            style={styles.image}
            source={type === 'LIGHT' ? BrandDefault : BrandWhite}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const LINE_BORDER_COLOR = {
  LIGHT: THEME.black,
  DARK: THEME.white,
  PRIMARY: THEME.white,
  SECONDARY: THEME.white,
};

export const HeaderBody = ({
  type = 'LIGHT',
  title,
  text,
  removePadding,
  hasMaxWidth,
}: IHeaderBody) => {
  return (
    <View
      style={{
        ...styles.headerBodyContainer,
        backgroundColor: HEADER_BODY_BACKGROUND[type],
      }}
    >
      <View
        style={[
          styles.headerContent,
          hasMaxWidth ? null : styles.headerContentPadding,
          removePadding ? null : styles.headerContentPaddingBottom,
        ]}
      >
        {title && (
          <View
            style={[styles.line, { borderColor: LINE_BORDER_COLOR[type] }]}
          />
        )}

        {title && (
          <View style={styles.titleContainer}>
            <Text
              fontSize={20}
              variant={type === 'LIGHT' ? 'black' : 'white'}
              bold
            >
              {title}
            </Text>
          </View>
        )}
        <View style={styles.subTitleContainer}>
          {text && (
            <Text fontSize={16} variant={type === 'LIGHT' ? 'black' : 'white'}>
              {text}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import BrandDefault from '@src/assets/brand/brand_primary.png';
import BrandWhite from '@src/assets/brand/brand_white.png';

import { THEME } from '@src/constants';
import { IconArrowLeft } from '@src/components';
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

import React, { ReactNode } from 'react';
import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '@src/constants';
import { HeaderTop } from '@src/components/molecules';
import { goBack } from '@src/router/actions';
import { THeaderTypes } from '@src/components/molecules/Header';

export interface IWrapper {
  backgroundColor?: string;
  safeAreaViewTopStyle?: object;
  safeAreaViewStyle?: object;
  withBackButton?: boolean;
  backButtonPress?: () => void;
  withDrawerButton?: boolean;
  headerType?: THeaderTypes;
  hasMaxWidth?: boolean;
  children: ReactNode;
}

const Wrapper = ({
  safeAreaViewTopStyle = {
    flex: 1,
  },
  safeAreaViewStyle = {
    flex: 1,
    backgroundColor: THEME.white,
  },
  backButtonPress,
  withDrawerButton = false,
  withBackButton = false,
  backgroundColor,
  headerType = 'LIGHT',
  hasMaxWidth = false,
  children,
}: IWrapper) => {
  const prepareSafeAreaViewTopStyleBackGround =
    headerType === 'LIGHT'
      ? THEME.background
      : headerType === 'SECONDARY'
      ? THEME.secondary
      : headerType === 'PRIMARY'
      ? THEME.primary
      : THEME.black;

  const statusBarStyle: 'light-content' | 'dark-content' | 'default' =
    headerType === 'LIGHT' ? 'dark-content' : 'light-content';

  return (
    <SafeAreaView
      style={{
        ...safeAreaViewTopStyle,
        backgroundColor: prepareSafeAreaViewTopStyleBackGround,
      }}
      edges={['top']}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={safeAreaViewStyle} edges={['right', 'left']}>
          <StatusBar animated barStyle={statusBarStyle} />
          <HeaderTop
            type={headerType}
            withBackButton={withBackButton}
            withDrawerButton={withDrawerButton}
            backPress={backButtonPress || goBack}
            hasMaxWidth={hasMaxWidth}
          />
          <BottomSheetModalProvider>
            <View
              style={{
                flex: 1,
                backgroundColor: backgroundColor || 'transparent',
              }}
            >
              {children}
            </View>
          </BottomSheetModalProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Wrapper;

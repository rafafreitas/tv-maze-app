import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FirstAccess } from '@src/modules/Auth';

export default function MarqueeBackground() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <FirstAccess />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import { NAVIGATORS } from './constants';
import { navigationRef } from './actions';
import { AuthNavigator, PrivateNavigator } from './navigators';

const { Navigator, Screen } = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={async () => {
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        if (currentRouteName) {
          // TODO - Add analytics support
        }
      }}
    >
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={NAVIGATORS.AUTH_NAVIGATOR}
      >
        <Screen
          name={NAVIGATORS.AUTH_NAVIGATOR}
          component={AuthNavigator}
          options={{ gestureEnabled: true }}
        />

        <Screen
          name={NAVIGATORS.PRIVATE_NAVIGATOR}
          component={PrivateNavigator}
          options={{ gestureEnabled: true }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Router;

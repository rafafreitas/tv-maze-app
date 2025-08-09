import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

export interface IScreen {
  name: string;
  component: React.FC<any>;
  options?: NativeStackNavigationOptions;
}

const { Navigator, Screen } = createNativeStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export default function withBaseNavigator(
  initialRouteName: string,
  screens: IScreen[],
  screenOptions = {},
) {
  const options = {
    ...defaultScreenOptions,
    ...screenOptions,
  };

  return (
    <Navigator initialRouteName={initialRouteName} screenOptions={options}>
      {screens.map((screen: IScreen) => (
        <Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Navigator>
  );
}

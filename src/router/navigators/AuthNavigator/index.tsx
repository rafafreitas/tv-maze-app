import { AuthFirstAccess } from '@src/modules/Auth';
import { SCREENS } from '@src/router/constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IScreen } from '../../types';
import React from 'react';

const screens = [
  {
    name: SCREENS.AUTH.FIRST_ACCESS,
    component: AuthFirstAccess,
  },
];

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthNavigator(initialParams = {}) {
  return (
    <Navigator
      initialRouteName={SCREENS.AUTH.FIRST_ACCESS}
      screenOptions={initialParams}
    >
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

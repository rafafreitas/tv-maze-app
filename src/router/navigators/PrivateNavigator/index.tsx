import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import withBaseNavigator from './base-navigator';

import { SCREENS, TAB_NAVIGATORS } from '@src/router/constants';
import { THEME } from '@src/constants';

import {
  HomeScreen,
  ShowViewScreen,
  EpisodeViewScreen,
} from '@src/modules/Home';

import {
  HomeFavoriteScreen,
  ShowFavoriteViewScreen,
  EpisodeFavoriteViewScreen,
} from '@src/modules/Favorites';

import { PeopleHomeScreen } from '@src/modules/People';

import { styles } from './style';
import { IconTv, IconUsers, IconStar } from '@src/components';

const Tab = createBottomTabNavigator();

const SCREENS_HOME = [
  {
    name: SCREENS.PRIVATE.HOME.HOME,
    component: HomeScreen,
  },
  {
    name: SCREENS.PRIVATE.HOME.ITEM_VIEW,
    component: ShowViewScreen,
  },
  {
    name: SCREENS.PRIVATE.HOME.EPISODE_VIEW,
    component: EpisodeViewScreen,
  },
];

const SCREENS_FAVORITES = [
  {
    name: SCREENS.PRIVATE.FAVORITES.HOME,
    component: HomeFavoriteScreen,
  },
  {
    name: SCREENS.PRIVATE.FAVORITES.ITEM_VIEW,
    component: ShowFavoriteViewScreen,
  },
  {
    name: SCREENS.PRIVATE.FAVORITES.EPISODE_VIEW,
    component: EpisodeFavoriteViewScreen,
  },
];

const SCREENS_PEOPLE = [
  {
    name: SCREENS.PRIVATE.PEOPLE.HOME,
    component: PeopleHomeScreen,
  },
];

const defaultScreenOptions = {
  headerShown: false,
};

function BaseNavigatorHome() {
  return withBaseNavigator(SCREENS.PRIVATE.HOME.HOME, SCREENS_HOME, {});
}

function BaseNavigatorFavorites() {
  return withBaseNavigator(
    SCREENS.PRIVATE.FAVORITES.HOME,
    SCREENS_FAVORITES,
    {},
  );
}

function BaseNavigatorSettings() {
  return withBaseNavigator(SCREENS.PRIVATE.PEOPLE.HOME, SCREENS_PEOPLE, {});
}

function PrivateNavigator(initialParams = {}) {
  const options = {
    ...defaultScreenOptions,
    ...initialParams,
    tabBarInactiveTintColor: THEME.gray,
    tabBarActiveTintColor: THEME.primary,
    tabBarLabelStyle: {
      fontSize: 11,
    },
    tabBarStyle: {
      borderTopWidth: 1,
      borderTopColor: THEME.primary,
      backgroundColor: THEME.white,
    },
  };

  return (
    <Tab.Navigator
      initialRouteName={TAB_NAVIGATORS.HOME_TAB_NAVIGATOR}
      screenOptions={options}
    >
      <Tab.Screen
        name={TAB_NAVIGATORS.FAVORITE_TAB_NAVIGATOR}
        component={BaseNavigatorHome}
        options={{
          tabBarLabel: 'Shows',
          tabBarIcon: route => (
            <IconTv color={route?.focused ? route.color : THEME.gray} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAVIGATORS.HOME_TAB_NAVIGATOR}
        component={BaseNavigatorFavorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: route => (
            <View style={styles.homeView}>
              <IconStar
                size={25}
                color={route?.focused ? route.color : THEME.gray}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAVIGATORS.PEOPLE_TAB_NAVIGATOR}
        component={BaseNavigatorSettings}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: route => (
            <IconUsers color={route?.focused ? route.color : THEME.gray} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default PrivateNavigator;

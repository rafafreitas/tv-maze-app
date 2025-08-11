const AUTH_NAVIGATOR_SCREENS = {
  FIRST_ACCESS: 'FirstAccessScreen',
};

const PRIVATE_NAVIGATOR_SCREENS = {
  HOME: {
    HOME: 'HomeScreen',
    ITEM_VIEW: 'FavoritesViewScreen',
    EPISODE_VIEW: 'EpisodeViewScreen',
  },
  FAVORITES: {
    HOME: 'FavoriteHomeScreen',
    ITEM_VIEW: 'FavoritesViewScreen',
    EPISODE_VIEW: 'EpisodeFavoritesViewScreen',
  },
  SETTINGS: {
    HOME: 'SettingsHomeScreen',
  },
};

export const NAVIGATORS = {
  AUTH_NAVIGATOR: 'AuthNavigator',
  PRIVATE_NAVIGATOR: 'PrivateNavigator',
};

export const TAB_NAVIGATORS = {
  HOME_TAB_NAVIGATOR: 'HomeTabNavigator',
  FAVORITE_TAB_NAVIGATOR: 'MemoryTabNavigator',
  SETTINGS_TAB_NAVIGATOR: 'NotificationTabNavigator',
};

export const SCREENS = {
  AUTH: { ...AUTH_NAVIGATOR_SCREENS },
  PRIVATE: { ...PRIVATE_NAVIGATOR_SCREENS },
};

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
  PEOPLE: {
    HOME: 'PeopleHomeScreen',
  },
};

export const NAVIGATORS = {
  AUTH_NAVIGATOR: 'AuthNavigator',
  PRIVATE_NAVIGATOR: 'PrivateNavigator',
};

export const TAB_NAVIGATORS = {
  HOME_TAB_NAVIGATOR: 'HomeTabNavigator',
  FAVORITE_TAB_NAVIGATOR: 'MemoryTabNavigator',
  PEOPLE_TAB_NAVIGATOR: 'PeopleTabNavigator',
};

export const SCREENS = {
  AUTH: { ...AUTH_NAVIGATOR_SCREENS },
  PRIVATE: { ...PRIVATE_NAVIGATOR_SCREENS },
};

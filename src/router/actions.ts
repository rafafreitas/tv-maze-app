import { createRef } from 'react';
import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef<object>>();

const navigationAction = (action: (navigation: NavigationContainerRef<object>) => void) => {
  const navigation = navigationRef.current;
  if (navigation) {
    action(navigation);
  }
};

export const navigate = (routeName: string, params?: object) => {
  navigationAction((navigation) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  });
};

export const changeStack = (stackName: string, routeName: string, params?: object) => {
  navigationAction((navigation) => {
    navigation.dispatch(StackActions.replace(stackName, { screen: routeName, params }));
  });
};

export const goBack = () => {
  navigationAction((navigation) => {
    navigation.dispatch(CommonActions.goBack());
  });
};

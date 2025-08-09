import { StyleSheet } from 'react-native';
import { THEME, PADDING_DEFAULT } from '@src/constants';

export const styles = StyleSheet.create({
  homeView: {
    width: 50,
    height: 50,
    backgroundColor: THEME.white,
    padding: PADDING_DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: THEME.primary,
    borderRadius: 50,
    marginTop: -30,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

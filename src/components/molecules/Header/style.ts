import { Platform, StyleSheet } from 'react-native';
import { THEME, PADDING_DEFAULT } from '@src/constants';

export const styles = StyleSheet.create({
  headerTopContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 30,
  },
  headerContent: {
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  headerContentPadding: {
    paddingHorizontal: PADDING_DEFAULT,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: PADDING_DEFAULT,
  },
  iconContainer: {
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.white,
  },
  backMenu: {
    left: 0,
  },
  image: {
    width: 110,
    height: 30,
  },
});

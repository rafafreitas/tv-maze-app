import { StyleSheet } from 'react-native';
import { PADDING_DEFAULT, THEME } from '@src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.black,
    justifyContent: 'center',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
  },
  marqueeContainer: {
    position: 'absolute',
  },
  safeArea: {
    flex: 1,
  },
  page: {
    paddingVertical: PADDING_DEFAULT,
    flex: 1,
    width: '100%',
    zIndex: 1,
    justifyContent: 'space-between',
  },
  overlay: {
    paddingVertical: PADDING_DEFAULT,
    flex: 1,
    width: '100%',
    zIndex: 1,
    justifyContent: 'space-between',
  },
  group: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PADDING_DEFAULT,
    gap: 10,
  },
  brand: {
    width: 316,
    height: 87,
  },
});

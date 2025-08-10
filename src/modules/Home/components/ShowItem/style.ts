import { StyleSheet } from 'react-native';
import { THEME, OPACITY_HEX } from '@src/constants';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 15,
    backgroundColor: THEME.primary + OPACITY_HEX.H_10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 50,
    height: 50,
  },
  group: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  details: {
    gap: 2,
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

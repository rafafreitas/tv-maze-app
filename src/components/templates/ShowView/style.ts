import { StyleSheet } from 'react-native';
import { PADDING_DEFAULT } from '@src/constants';

export const styles = StyleSheet.create({
  page: {
    padding: PADDING_DEFAULT,
    gap: 10,
    paddingBottom: 25,
  },
  container: {
    flex: 1,
  },
  group: {},
  imageContainer: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    flexGrow: 1,
    width: '100%',
    flexDirection: 'column',
  },
});

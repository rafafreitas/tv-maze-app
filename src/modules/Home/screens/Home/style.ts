import { StyleSheet } from 'react-native';
import { PADDING_DEFAULT } from '@src/constants';

export const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  scrollViewPage: {
    paddingHorizontal: PADDING_DEFAULT,
  },
  headerContainer: {
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  cleanSearchContainer: {
    justifyContent: 'center',
  },
  gap: {
    height: 10,
  },
  emptyContainer: {
    justifyContent: 'center',
  },
});

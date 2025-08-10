import { StyleSheet } from 'react-native';
import { OPACITY_HEX, THEME } from '@src/constants';

export const styles = StyleSheet.create({
  headerContainerBase: {
    width: '100%',
    minHeight: 56,
    backgroundColor: THEME.gray + OPACITY_HEX.H_13,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  headerLine: {
    flexDirection: 'row',
    gap: 5,
  },
  content: {
    width: '100%',
    gap: 10,
    padding: 10,
  },
  sectionContainer: {
    marginBottom: 10,
  },
  textContainer: {
    flexWrap: 'wrap',
    flex: 1,
  },
});

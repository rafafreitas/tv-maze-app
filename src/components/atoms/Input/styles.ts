import { StyleSheet } from 'react-native';
import { THEME } from '@src/constants';

export const styles = StyleSheet.create({
  labelContainer: {
    width: '100%',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 5,
  },
  inputContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingBottom: 5,
  },
  inputContainerRow: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    borderColor: THEME.black,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  input: {
    flexDirection: 'row',
    flex: 1,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    color: THEME.black,
    backgroundColor: THEME.white,
    fontSize: 15,
  },
  errorContainer: {
    width: '100%',
    height: 15,
    paddingLeft: 20,
    marginTop: 2,
  },
});

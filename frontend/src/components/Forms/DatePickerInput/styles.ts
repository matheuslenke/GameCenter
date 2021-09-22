import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //borderWidth: 2,
    //borderColor: 'red',
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  divider: {
    marginRight: 4,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  }, 
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: theme.fonts.title500,
    color: theme.colors.highlight,
  }
});
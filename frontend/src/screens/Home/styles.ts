import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight() + 26,
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.title700,
    color: theme.colors.highlight,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  }, 
  games: {
    // backgroundColor: 'red',
  }
});
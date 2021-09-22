import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight() + 20,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    color: theme.colors.highlight,
    textAlign: 'center'
  },
  content: {
    flex: 1,
  },
  form: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 24,
    justifyContent: 'space-between',
  },
  inputs: {
    flex: 1,
  },
  placeHolder:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
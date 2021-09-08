import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '95%',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight(),
  },
  logo: {
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: "center",
    lineHeight: 40,
  },
  title: {
    textAlign: 'center',
    fontSize: 56,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    paddingTop: 5,
    alignSelf: 'center',
    textAlign: 'center',
    color: theme.colors.highlight,
    fontSize: 16,
    fontFamily: theme.fonts.subtitle500
  },
  buttons:{
    paddingHorizontal: 32,
    paddingBottom: getBottomSpace() + 42,
  }
});
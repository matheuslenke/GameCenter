import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import {theme} from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight() + 20,
  },
  header: {
    flex: 1,
    alignItems: 'center'
  },
  headerName: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  title:{
    fontFamily: theme.fonts.title700,
    fontSize: 36,
    color: theme.colors.heading,
  },
  rating: {
    fontFamily: theme.fonts.title700,
    fontSize: 36,
    paddingLeft: 20,
    color: theme.colors.heading
  },
  cover: {
    width: 198,
    height: 271,
  },
  gameContent: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 130,
    marginVertical: 20,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRadius: 8,
    maxHeight: 36,
    backgroundColor: theme.colors.primary50,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 16
  }
});
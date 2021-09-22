import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import {theme} from '../../global/theme';

export const styles = StyleSheet.create({
  backButton: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
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
    justifyContent: 'center'
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
});
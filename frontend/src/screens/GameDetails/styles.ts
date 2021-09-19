import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import {theme} from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight() + 20,
  },
  header: {
    //backgroundColor: 'red',
    flex: 1,
    alignItems: 'center'
  },
  title:{
    fontFamily: theme.fonts.title700,
    fontSize: 36,
    marginTop: 20,
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
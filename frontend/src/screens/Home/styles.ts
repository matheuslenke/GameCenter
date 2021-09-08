import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: getStatusBarHeight() + 26,
  }
});
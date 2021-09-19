import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxHeight: 20,
    borderRadius: 6,
    padding: 4,
    marginRight: 6,
  }, 
  text:{
    fontFamily: theme.fonts.subtitle400,
    fontSize: 10
  }
});
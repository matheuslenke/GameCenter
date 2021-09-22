import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.brown,
    color: theme.colors.highlight,
    width: 50,
    height: 32,
    marginRight: 4,
    textAlign: 'center',
    borderRadius: 8,
    fontFamily: theme.fonts.subtitle600
  }
});
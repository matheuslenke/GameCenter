import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: theme.colors.primary90,
    borderRadius: 16,
  },
  title: {
    fontFamily: theme.fonts.title500,
    fontSize: 22,
    color: theme.colors.highlight,
  },
});
import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.secondary30,
    borderRadius: 16,
    padding: 12,
    color: theme.colors.highlight,
  },
  title: {
    color: theme.colors.highlight,
    fontSize: 14,
    fontFamily: theme.fonts.subtitle600
  },
  icon: {
    backgroundColor: theme.colors.primary70,
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 16
  }
});
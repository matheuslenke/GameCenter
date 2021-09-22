import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center'
  },
  title: {
    fontFamily: theme.fonts.subtitle600,
    color: theme.colors.highlight,
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 20
  },
  content: {
    flex: 1,
    paddingTop: 20
  }
});
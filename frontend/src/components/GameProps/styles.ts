import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.brown,
    borderRadius: 16
  },
  content:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5
  },
  list:{
    flex: 1,
  },
  subtitle:{
    fontFamily: theme.fonts.subtitle500,
    color: theme.colors.heading,
    fontSize: 13
  },
  text: {
    fontFamily: theme.fonts.subtitle500,
    color: theme.colors.text50,
    fontSize: 11
  },
  platformLogo: {
    marginRight: 4,
  },
  companiesList:{
    fontFamily: theme.fonts.subtitle500,
    color: theme.colors.text50,
    fontSize: 11
  },
  summaryText: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13
  }
});
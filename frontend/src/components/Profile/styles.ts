import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme'; 

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 22,
    alignItems: 'center'
  },
  user:{
    flexDirection: 'row',
  },
  greeting: {
    color: theme.colors.highlight,
    fontSize: 16,
    fontFamily: theme.fonts.subtitle500
  },
  username:{
    color: theme.colors.primary70,
    fontSize: 16,
    fontFamily: theme.fonts.subtitle600,
    paddingLeft: 5
  },
  message:{
    color: theme.colors.heading,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 12,
  }
});
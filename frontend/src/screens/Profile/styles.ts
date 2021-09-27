import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  user:{
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  content:{
    
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,

  },
  username:{
    fontFamily: theme.fonts.subtitle500,
    fontSize: 24,
    color: theme.colors.primary90,
  },
  email: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.highlight,
  },
  logout:{
    marginTop: 30
  }

});
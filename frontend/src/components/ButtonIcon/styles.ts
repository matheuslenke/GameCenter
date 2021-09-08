import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper:{
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: theme.colors.secondary70,
  },
  icon:{
    width: 24,
    height: 18,
  },
  titleDiscord:{
    flex: 1,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.heading,
  },
  titleOther:{
    flex: 1,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.secondary70
  },
  buttonDiscord: {
    backgroundColor: theme.colors.discord,
  },
  buttonOther: {
    backgroundColor: theme.colors.highlight
  }
});
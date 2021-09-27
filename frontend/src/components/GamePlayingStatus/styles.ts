import { theme } from './../../global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  gameStatus: {
    flex: 3,
    marginTop: 10,
  },
  playStatus: {
    flexDirection: 'row'
  },
  statusText: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  },
  text: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
  },
  buttons: {
    flex: 2,
    justifyContent: 'center'
  },
  primaryButton: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRadius: 8,
    maxHeight: 36,
    backgroundColor: theme.colors.on,
    justifyContent: 'center',
  },
  secondaryButton: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRadius: 8,
    maxHeight: 36,
    backgroundColor: theme.colors.primary70,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 12
  }
});
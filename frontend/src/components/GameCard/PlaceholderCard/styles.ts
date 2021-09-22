import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

const BORDER_RADIUS = 10;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 170,
    backgroundColor: theme.colors.secondary70,
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noCover: {
    height: '100%',
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary30
  },
  noCoverText: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.highlight
  }
});
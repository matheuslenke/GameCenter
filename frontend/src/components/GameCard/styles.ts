import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const BORDER_RADIUS = 10;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: theme.colors.secondary70,
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS
  },
  cover: {
    height: '100%',
    width: 120,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  gameTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.highlight
     
  }
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const BORDER_RADIUS = 10;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 170,
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
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  gameTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.highlight,
    width: '90%'
    // marginRight: 8,
  },
  heading:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'stretch'
  },
  gameRating: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
  },
  data:{
    flex: 1,
    flexDirection: 'column'
  },
  gameSummary:{
    fontSize: 14,
    paddingTop: 10,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text50,
  },
  platforms: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    overflow: 'hidden',
  },
  platformLogo: {
    marginRight: 4,
  },
  genres: {
    flex: 1,
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
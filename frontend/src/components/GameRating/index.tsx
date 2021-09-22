import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { theme } from '../../global/theme';

import { styles } from './styles';

type Props = {
  rating: number;
}

export function GameRating( { rating }: Props){
  let ratingColor = theme.colors.on;
  const ratingInteger = Math.floor(rating)

  if (rating < 80 && rating >= 30) {
    ratingColor = theme.colors.warn
  } else if (rating < 30) {
    ratingColor = theme.colors.primary90
  }

  return (
      <Text style={[
        styles.gameRating, 
          {
            color: ratingColor
          }
        ]}
      >
        {ratingInteger}
      </Text>
  );
}
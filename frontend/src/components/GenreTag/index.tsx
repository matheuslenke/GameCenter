import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import { styles } from './styles';
import { genres } from '../../utils/genres'
import { theme } from '../../global/theme';

type Props = {
  id: string;
}

export function GenreTag({ id }: Props) { 

  const genre = genres.find( item => item.id === String(id));
  const backgroundColor = genre !== undefined ? genre?.backgroundColor : '#FFFF'
  const fontColor = genre !== undefined ? genre?.fontColor : theme.colors.primary90

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor}]}>
      <Text style={[styles.text, {color: fontColor}]}>{genre?.title}</Text>
    </View>
  );
}
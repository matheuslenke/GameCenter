import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
  Image,
  View
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/theme';

type Props = {
  urlImage: string;
  sizeImage: number;
}

export function Avatar( { urlImage , sizeImage}: Props ){
  const { primary50, primary90 } = theme.colors;

  return (
    <LinearGradient style={[styles.container, {width: sizeImage}, {height: sizeImage}]} colors={[primary50, primary90]}>
      <Image source={{ uri: urlImage }} style={[styles.avatar, {width: sizeImage}, {height: sizeImage}]} />
    </LinearGradient>
  );
}
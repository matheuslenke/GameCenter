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
}

export function Avatar( { urlImage }: Props ){
  const { primary50, primary90 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[primary50, primary90]}>
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
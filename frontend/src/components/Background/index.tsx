import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/theme';
import { View } from 'react-native';


type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { secondary80, secondary90 } = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary90, secondary80]}
    >
      { children } 
    </LinearGradient>
  )
}

import React from 'react';

import {
  View, Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { theme } from '../../global/theme';

import { styles } from './styles';
import { SvgProps } from 'react-native-svg';

type Props = RectButtonProps & {
  title: string;
  icon: string;
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function Category({
  title,
  icon,
  checked = true,
  ...rest
}: Props) {
  const { secondary100, secondary80, secondary30, secondary70, primary90 } = theme.colors;
  
  return (
    <RectButton {...rest} >
      <LinearGradient
        style={styles.container}
        colors={[secondary100, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary80 : secondary70, secondary30 ]}
        >
          <MaterialIcon
            name={icon}
            size={30}
            color={theme.colors.highlight}
          />
          <Text style={styles.title}>
            { title }
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
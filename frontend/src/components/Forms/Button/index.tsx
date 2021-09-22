import React from 'react';

import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}
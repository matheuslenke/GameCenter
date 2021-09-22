import React from 'react';
import { TextInputProps } from 'react-native'

import {
  View,
  TextInput
} from 'react-native';
import { theme } from '../../../global/theme';

type Props = TextInputProps;

import { styles } from './styles'

export function Input( {...rest}: Props){
  return (
    <TextInput {...rest} style={styles.container} placeholderTextColor={theme.colors.heading}>

    </TextInput>
  );
}
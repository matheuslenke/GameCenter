import { useNavigation } from '@react-navigation/core';
import React from 'react';

import {
  View,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../../global/theme';

import { styles } from './styles';

export function BackButton() {

  const navigation = useNavigation()

  function handlePressBackButton() {
    navigation.goBack()
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePressBackButton}>
      <MaterialIcons 
        name="arrow-back-ios"
        size={25}
        color={theme.colors.highlight}
      />
    </TouchableOpacity>
  );
}
import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

export function PlaceholderCard(){
  return (
    <View style={styles.container}>
      <View style={styles.noCover}>
        <Text style={styles.noCoverText}>Jogo sem capa</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.noCoverText}> Jogo não selecionado </Text>
      </View>
    </View>
  );
}
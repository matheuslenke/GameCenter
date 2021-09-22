import React, { Dispatch, SetStateAction } from 'react';

import {
  View,
  Text,
  TextInput,

} from 'react-native';

import { Feather } from '@expo/vector-icons'

import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../../global/theme';

interface Props {
  placeholder: string;
  gameName: string;
  setGameName: Dispatch<SetStateAction<string>>;
  onPressSearch: () => void;
}

export function GameSelect( { placeholder, gameName, setGameName, onPressSearch }: Props){
  

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder={ placeholder }
        placeholderTextColor={theme.colors.heading}
        value={gameName}
        onChangeText={setGameName}
      >
      </TextInput>
      <TouchableOpacity style={styles.icon} onPress={onPressSearch} >
        <Feather name="search" size={25} color={theme.colors.highlight} />
      </TouchableOpacity>
    </View>
  );
}
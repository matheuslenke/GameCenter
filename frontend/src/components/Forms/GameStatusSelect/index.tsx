import React, { Dispatch, SetStateAction } from 'react';

import {
  View,
  Text,
} from 'react-native';
import { Picker } from '@react-native-community/picker'


import { styles } from './styles';

import { enumCategory } from '../../../screens/CreateGame'

interface Props {
  selectedValue: string;
  options: {
    label: string;
    value: string;
  }[];
  setSelectedValue: Dispatch<SetStateAction<enumCategory>>;
}

export function GameStatusSelect({ selectedValue, options, setSelectedValue}: Props){
  return (
    <View style={styles.container}>
      <Picker 
        itemStyle={{fontSize: 10, height: 150}}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {setSelectedValue(String(itemValue) as enumCategory)}}
      >
        {
          options.map(option => (
            <Picker.Item key={option.label} color="#FFF" label={option.label} value={option.value} />
          ))
        }
      </Picker>
    </View>
  );
}
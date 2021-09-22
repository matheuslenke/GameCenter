import React, { Dispatch, SetStateAction } from 'react';

import {
  Alert,
  View,
  Text
} from 'react-native';
import { Input } from '../Input';

import { styles } from './styles';

import { InputDate } from '../../../screens/CreateGame'

type Props = {
  date: InputDate;
  setDate: Dispatch<SetStateAction<InputDate>>;
  title: string;
}

export function DatePickerInput({ date, setDate, title }: Props){

  function handleChangeDay(day: string) {
    if(Number(day) > 31 || Number(day) < 0) {
      Alert.alert('Fora do intervalo de dia')
      const newDate = date;
      date.day = '';
      setDate( newDate )
      return;
    }
    const newDate = date;
    date.day = day;
    setDate( newDate )
  }
  function handleChangeMonth(month: string) {
    if(Number(month) > 12 || Number(month) < 0) {
      const newDate = date;
      date.month = '';
      setDate( newDate )
      Alert.alert('Fora do intervalo de mês')
      return
    }
    const newDate = date;
    date.month = month;
    setDate( newDate )
  }
  function handleChangeYear(year: string) {
    if(Number(year) < 0) {
      Alert.alert('Fora do intervalo de ano')
      const newDate = date;
      date.year = '';
      setDate( newDate )
      return
    }
    const newDate = date;
    date.year = year;
    setDate( newDate )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Input 
          style={styles.input}
          keyboardType="numeric"
          placeholder="Dia"
          maxLength={2}
          onChangeText={handleChangeDay} 
        />
        <Text style={styles.divider}>
          /
        </Text>
        <Input 
          keyboardType="numeric" 
          placeholder="Mês" 
          maxLength={2}
          onChangeText={handleChangeMonth} 
        />
        <Text style={styles.divider}>
          /
        </Text>
        <Input 
          keyboardType="numeric" 
          placeholder="Ano"  
          maxLength={4}
          onChangeText={handleChangeYear} 
        />
      </View>
    </View>
  );
}
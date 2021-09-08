import React, { useState } from 'react';

import {
  View, Text
} from 'react-native';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';

export function Home(){
  const [category, setCategory] = useState('');

  return (
    <Background>
      <View style={styles.container}>
        <Profile />
        <CategorySelect 
          categorySelected={category}
          setCategory={setCategory}
        />
      </View>
    </Background>
  );
}
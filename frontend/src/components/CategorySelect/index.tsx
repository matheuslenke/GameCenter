import React from 'react';

import {
  View, ScrollView
} from 'react-native';
import { enumGameStatusCategory } from '../../hooks/games';

import { categories } from '../../utils/categories';
import { Category } from '../Category';
import { styles } from './styles';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: enumGameStatusCategory) => void;
}

export function CategorySelect({categorySelected, setCategory}: Props){
  return (
    <ScrollView
        horizontal 
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
    >
         {
           categories.map(category => (
            <View style={{paddingRight: 10}} key={category.id} >
              <Category 
                title={category.title} icon={category.icon}
                checked={category.value === categorySelected}
                onPress={() => { setCategory(category.value as enumGameStatusCategory)}}
              />
            </View>
          ))
        }
    </ScrollView>
  );
}
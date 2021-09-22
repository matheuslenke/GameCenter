import React, { useState } from 'react';

import {
  View, Text, FlatList
} from 'react-native';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { Game, useGames } from '../../hooks/games';
import { GameCard } from '../../components/GameCard';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Home(){
  const [category, setCategory] = useState('');
  const { games, loading } = useGames();
  const { user, signOut } = useAuth();

  const navigation = useNavigation();

  function handleGameDetails(gameSelected: Game ) {
    navigation.navigate('GameDetails', { gameSelected  });
  }

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { signOut() }}>
          <Profile user_name={user.display_name} user_avatar={user.avatar} />

        </TouchableOpacity>
        <Text style={styles.title}> Meus jogos </Text>
        <CategorySelect 
          categorySelected={category}
          setCategory={setCategory}
        />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          style={ styles.games } 
          renderItem={({item}) =>(
            <GameCard
              game={item} 
              onPress={() => { handleGameDetails(item) }} 
            />
            
          )}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          contentContainerStyle={{ paddingBottom: 69, marginHorizontal: 15}}
        />
      </View>
    </Background>
  );
}
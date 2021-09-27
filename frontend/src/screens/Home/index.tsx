import React, { useEffect, useState } from 'react';

import {
  View, Text, FlatList, RefreshControl
} from 'react-native';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { enumGameStatusCategory, Game, useGames } from '../../hooks/games';
import { GameCard } from '../../components/GameCard';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Load } from '../../components/Load'


type CategorySelect = 'WISHLIST' | 'BACKLOG' | 'PLAYING' | 'FINISHED' | 'ABANDONED'

export function Home(){
  const [category, setCategory] = useState<enumGameStatusCategory>('PLAYING');
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { games, loading, loadGamesFromGameCenter, removeGamesStorageData } = useGames();
  const { user, signOut } = useAuth();

  const navigation = useNavigation();

  function handleGameDetails(gameSelected: Game ) {
    navigation.navigate('GameDetails', { gameSelected  });
  }

  function handleSignOut() {
    signOut();
    removeGamesStorageData();
  }

  useEffect( () => {
    const filtered = games.filter(game => {
      return game.gameStatus === category
    })
    setFilteredGames(filtered)

  }, [category, games])

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSignOut}>
          <Profile user_name={user.display_name} user_avatar={user.avatar} />

        </TouchableOpacity>
        <Text style={styles.title}> Meus jogos </Text>
        <CategorySelect 
          categorySelected={category}
          setCategory={setCategory}
        />
        {
          loading ? (
            <Load />
          ) : (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={loadGamesFromGameCenter} />
            }
            data={filteredGames}
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
          )
        }

      </View>
    </Background>
  );
}
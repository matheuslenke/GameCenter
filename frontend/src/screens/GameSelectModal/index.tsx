import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { GameCard } from '../../components/GameCard';
import { Game, GameData } from '../../hooks/games';


import { apiIGDB } from '../../services/apiIGDB';
import { styles } from './styles';
import { Load } from '../../components/Load'

interface Props {
  gameName: string;
  setGame: (game: GameData) => void;
  closeSelectGame: () => void;
}

export function GameSelectModal({ gameName, setGame, closeSelectGame }: Props) {
  const [games, setGames] = useState<GameData[]>([])
  const [loading, setLoading] = useState(false)

  function handleSelectGame(game: GameData) {
    setGame(game)
    closeSelectGame()
  }

  async function fetchSearchForGame() {
    setLoading(true)
    const searchText= `search "${gameName}";
    fields name, cover.image_id, first_release_date,
    franchises.name,
    platforms.id, platforms.category, platforms.platform_logo.image_id, platforms.name,
    game_modes.*,genres.*,involved_companies.id, involved_companies.company.id,
    involved_companies.company.name,rating,rating_count,screenshots.image_id,
    summary,url,status,websites.*; limit 10;`

    try {
      const response = await apiIGDB.post('games', searchText) ;
      const gamesData = response.data as GameData[]

      setGames(gamesData);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSearchForGame()
  }, [])



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Escolha o jogo desejado</Text>
      </View>
      <View style={styles.content}>
       { loading ? (
          <Load />
        ) : (
        <FlatList 
          data={games}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          contentContainerStyle={{ paddingBottom: 69, marginHorizontal: 15}}
          renderItem={({item}) => (
            <GameCard
              onPress={() => { handleSelectGame(item) }} 
              data={item}
            />
          )}
        />
        )}
      </View>
    </View>
  );
}
import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Game, useGames } from '../../hooks/games';
import { GameProps } from '../../components/GameProps';
import { imageCoverUrl } from '../../services/apiIGDB';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { GamePlayingStatus } from '../../components/GamePlayingStatus';
import { GameRating } from '../../components/GameRating';
import { BackButton } from '../../components/BackButton';
import { Load } from '../../components/Load';

type Params = {
  gameSelected: Game;
}

export function GameDetails(){
  const [loading, setLoading] = useState( false )

  const { deleteGame } = useGames()

  const route = useRoute();
  const navigation = useNavigation()
  const { gameSelected } = route.params as Params;

  const { gameData } = gameSelected;

  if (gameData === undefined) {
    return (
      <View>
        <Text>Jogo não possui dados</Text>
      </View>
    )
  }

  async function handleDeleteGame() {
    try {
      setLoading(true)
      await deleteGame(gameSelected)
      navigation.goBack();
    } catch(error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Background>
      <View style={styles.container}>
          <BackButton />
        <ScrollView 
          contentOffset={{ x: 0, y: -30 }}
        >
          <View style={styles.header}>
            <Image 
              source={{ uri: `${imageCoverUrl}${gameData.cover.image_id}.png` }}
              style={styles.cover}
            />
            <View style={styles.headerName}>
              <Text style={styles.title} >{gameData.name}</Text>
              {
                gameData.rating &&
                <View style={styles.rating}>
                  <GameRating rating={gameData.rating}/>
                </View>
              }
            </View>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <GamePlayingStatus data={gameSelected} />
          </View>
          <View style={styles.gameContent}>
            <GameProps 
              data={gameSelected}
          />
          </View>
        
          <TouchableOpacity 
            style={styles.button}
            onPress={handleDeleteGame}
          >
            {
              loading ? (
                <Load />
              ) : (
                <Text style={styles.buttonText}>Deletar jogo</Text>
              )
            }
            
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Background>
  );
}

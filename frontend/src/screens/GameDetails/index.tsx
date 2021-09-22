import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Game } from '../../hooks/games';
import { GameProps } from '../../components/GameProps';
import { imageCoverUrl } from '../../services/apiIGDB';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { GamePlayingStatus } from '../../components/GamePlayingStatus';
import { GameRating } from '../../components/GameRating';
import { BackButton } from '../../components/BackButton';

type Params = {
  gameSelected: Game;
}

export function GameDetails(){

  const route = useRoute();
  const { gameSelected } = route.params as Params;

  const { gameData } = gameSelected;

  if (gameData === undefined) {
    return (
      <View>
        <Text>Jogo não possui dados</Text>
      </View>
    )
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <BackButton />
        </View>
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
          <View style={{marginHorizontal: 20}}>
            <GamePlayingStatus data={gameSelected} />
          </View>
          <View style={styles.gameContent}>
            <GameProps 
              data={gameSelected}
          />
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}
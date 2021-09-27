import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { Game, GameData } from '../../hooks/games';

import { theme } from '../../global/theme';
import { styles } from './styles';
import { imageCoverUrl } from '../../services/apiIGDB';
import { PlatformLogo } from '../PlatformLogo';
import { GenreTag } from '../GenreTag';
import { GameRating } from '../GameRating';
import { PlaceholderCard } from './PlaceholderCard';
import { filterPlatforms } from '../../utils/platforms';

type Props = RectButtonProps & {
  data?: GameData;
  game?: Game;
}

export function GameCard({ data, game , ...rest}: Props) {
  let gameData = undefined;

  if(data === undefined && game === undefined) {
    return <PlaceholderCard />
  } else if(data !== undefined) {
    gameData = data;
  } else if(game !== undefined) {
    gameData = game.gameData;
  }

  const filteredPlatforms = gameData?.platforms ? filterPlatforms(gameData?.platforms) : []

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        {
          gameData?.cover ?
         ( <Image 
            source={{uri: `${imageCoverUrl}${gameData?.cover.image_id}.png`}}
            style={styles.cover}
            resizeMode="cover"
          />) :
          (
            <View style={styles.noCover}>
              <Text style={styles.noCoverText}>Jogo sem capa</Text>
            </View>
          )
        }

        {
          gameData ? (
            <View style={styles.content}>
            <View style={styles.heading} >
              <Text numberOfLines={2} style={styles.gameTitle}>{gameData.name}</Text>
              {
                gameData.rating &&
                <GameRating 
                  rating={gameData.rating}
                />
              }
            </View>
            
            <View style={styles.data}>
              <Text numberOfLines={2} style={styles.gameSummary}>{gameData?.summary}</Text>
              <FlatList
                horizontal
                keyExtractor={ item => String(item)}
                data={filteredPlatforms}
                style={styles.platforms}
                fadingEdgeLength={10} 
                showsHorizontalScrollIndicator={false}
                renderItem={( { item} ) => (
                    <View style={styles.platformLogo}>
                      <PlatformLogo platform={String(item)} />
                    </View>
                )}
              >
              </FlatList>
              <View style={styles.genres}>
                <FlatList 
                  horizontal 
                  data={gameData?.genres}
                  keyExtractor={item => String(item.id)}
                  style={styles.genres}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ marginTop: 7}}
                  renderItem={ ({item}) => (
                      <GenreTag id={item.id} />
                  )}
                />
              </View>
            </View>
          </View>
          ) : 
          (
            <View style={styles.content}>
              <Text style={styles.noCoverText}>Jogo não selecionado</Text>
            </View>
          )
        }
 
      </View>
    </RectButton>
  );
}
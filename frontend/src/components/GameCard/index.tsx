import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import { Game } from '../../hooks/games';

import { theme } from '../../global/theme';
import { styles } from './styles';
import { imageCoverUrl } from '../../services/apiIGDB';
import { PlatformLogo } from '../PlatformLogo';
import { LinearGradient } from 'expo-linear-gradient';
import { GenreTag } from '../GenreTag';

type Props = RectButtonProps & {
  data: Game;
}

export function GameCard({ data , ...rest}: Props){
  const { on, line } = theme.colors;

  const defineColor = data.rating > 50;
  
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <Image 
          source={{uri: `${imageCoverUrl}${data.cover.image_id}.png`}}
          style={styles.cover}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View style={styles.heading} >
            <Text style={styles.gameTitle}>{data.name}</Text>
            <Text style={[styles.gameRating, 
              {
                color: defineColor ? on : line,
              }
            ]}>{Math.floor(data.rating)}</Text>
          </View>
          
          <View style={styles.data}>
            <Text numberOfLines={2} style={styles.gameSummary}>{data.summary}</Text>
            <FlatList
              horizontal
              keyExtractor={ item => item.id}
              data={data.platforms}
              style={styles.platforms}
              fadingEdgeLength={10} 
              showsHorizontalScrollIndicator={false}
              renderItem={( { item} ) => (
                  <View style={styles.platformLogo}>
                    <PlatformLogo platform={item.id} />
                  </View>
              )}
            >
            </FlatList>
            <View style={styles.genres}>
              <FlatList 
                horizontal 
                data={data.genres}
                keyExtractor={item => item.id}
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
      </View>
    </RectButton>
  );
}
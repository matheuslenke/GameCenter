import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { Game } from '../../hooks/games';

import { theme } from '../../global/theme';
import { styles } from './styles';
import { imageCoverUrl } from '../../services/apiIGDB';
import { PlatformLogo } from '../PlatformLogo';
import { LinearGradient } from 'expo-linear-gradient';

type Props = RectButtonProps & {
  data: Game;
}

export function GameCard({ data , ...rest}: Props){
  const { on, line } = theme.colors;

  const defineColor = data.rating > 50;
  const overflowPlatforms =  data.platforms.length > 6;
  
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
            <ScrollView
              horizontal
              style={styles.platforms}
              fadingEdgeLength={10} 
              showsHorizontalScrollIndicator={false}
            >
              {
                data.platforms.map(platform => (
                  <View key={platform.id} style={styles.platformLogo}>
                    <PlatformLogo platform={platform.id} />
                  </View>
                ))
              }
            </ScrollView>
            {
               overflowPlatforms && (
                <LinearGradient
                  style={{flex: 1, position: 'relative', top: -37, right: 0, }}
                  locations={[0.7, 0.95, 1]}
                  start={[0,0]}
                  end={[1,0]}
                  colors={['transparent', '#252323']}
                  pointerEvents={'none'}
                />
              )
            }
            <View style={styles.genres}>

            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
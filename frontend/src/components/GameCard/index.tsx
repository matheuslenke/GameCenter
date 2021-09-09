import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  View,
  Text,
  Image
} from 'react-native';
import { Game } from '../../hooks/games';

import { styles } from './styles';
import { imageCoverUrl } from '../../services/apiIGDB';

type Props = RectButtonProps & {
  data: Game;
}

export function GameCard({ data , ...rest}: Props){
  return (
    <RectButton {...rest} style={styles.container}>
      <Image 
        source={{uri: `${imageCoverUrl}${data.cover.image_id}.png`}}
        style={styles.cover}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.gameTitle}>{data.name}</Text>
      </View>

    </RectButton>
  );
}
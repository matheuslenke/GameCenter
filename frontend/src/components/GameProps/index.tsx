import React from 'react';

import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { Game } from '../../hooks/games';

import { styles } from './styles';
import { GenreTag } from '../../components/GenreTag';
import { PlatformLogo } from '../PlatformLogo';

import { formatDate } from '../../utils/dateFormatter'
import { filterPlatforms } from '../../utils/platforms';

type Props = {
  data: Game
}

export function GameProps( { data }: Props ) {
  const { gameData } = data;

  if (gameData === undefined) {
    return (<View></View>)
  }

  const releaseDate = formatDate(new Date(Number(gameData.first_release_date) * 1000));
  const filteredPlatforms = filterPlatforms(gameData?.platforms)

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Gêneros: </Text>
        <FlatList 
          horizontal 
          data={gameData.genres}
          keyExtractor={item => item.id}
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 7}}
          renderItem={ ({item}) => (
              <GenreTag id={item.id} />
          )}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Plataformas: </Text>
        <FlatList
          horizontal
          keyExtractor={ item => String(item)}
          data={filteredPlatforms}
          style={styles.list}
          fadingEdgeLength={10} 
          showsHorizontalScrollIndicator={false}
          renderItem={( { item} ) => (
              <View style={styles.platformLogo}>
                <PlatformLogo platform={String(item)} />
              </View>
          )}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Data de lançamento: </Text>
        <Text style={styles.text}>{ releaseDate }</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Empresa: </Text>
        <FlatList
          horizontal
          keyExtractor={ item => item.id}
          data={gameData.involved_companies}
          style={styles.list}
          fadingEdgeLength={10} 
          showsHorizontalScrollIndicator={false}
          renderItem={( { item} ) => (
            <Text style={styles.companiesList}> {item.company.name} </Text>
          )}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.summaryText}>{ gameData.summary }</Text>
      </View>
    </View>
  );
}
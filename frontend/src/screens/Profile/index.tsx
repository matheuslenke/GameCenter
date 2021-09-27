import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Forms/Button';
import { useAuth } from '../../hooks/auth';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { useGames } from '../../hooks/games';

export function Profile(){
  const { user, signOut } = useAuth()
  const { removeGamesStorageData } = useGames()

  function handleSignOut() {
    signOut();
    removeGamesStorageData();
  }
  return (
    <Background>
      <View style={styles.container}>
          
        <View style={styles.content}>
          <Avatar urlImage={user.avatar} sizeImage={200}/>
          <View style={styles.user}>
            <Text style={styles.username}>
              { user.display_name }
            </Text>
            <Text style={styles.email}>
              { user.email }
            </Text>
          </View>
          <View style={styles.logout}>
            <Button title="Deslogar" onPress={handleSignOut} />
          </View>
        </View>
      </View>
    </Background>
  );
}
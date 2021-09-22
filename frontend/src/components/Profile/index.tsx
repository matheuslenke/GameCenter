import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

type Props = {
  user_name: string;
  user_avatar: string;
}

export function Profile( { user_name, user_avatar }: Props ){
  return (
    <View style={styles.container}>
      
      <Avatar urlImage={user_avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            { user_name }
          </Text>
        </View>
        <Text style={styles.message}>
          Bem vindo a sua central de jogos!
        </Text>
      </View>
    </View>
  );
}
import React, { useCallback } from 'react';

import {
  View, Text, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';
import { theme } from '../../global/theme';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import TwitchImg from '../../assets/img/social/twitchWhite.svg';
import { useAuth } from '../../hooks/auth';
import { Ionicons } from '@expo/vector-icons';


export function SignIn(){

  const navigation = useNavigation();
  const { signIn } = useAuth();
  
  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(String(error));
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <View>
          <View style={[{justifyContent: 'center', alignItems: 'center', marginBottom: 0}]}>
            <Ionicons
              name="game-controller"
              size={80}
              color={'white'}
            />
          </View>
          <View style={styles.logo} >
            <Text style={[styles.title, {color: theme.colors.highlight}]}>
                Game
            </Text>
            <Text style={ [styles.title, {color: theme.colors.primary70}] }>
                Center
            </Text>
          </View>
          <Text style={styles.subtitle}>
            O seu gerenciamento de games
          </Text>
        </View>

        <View style={styles.buttons}>
          <View style={{height: 18}} />
           <ButtonIcon
            title="Entrar com Twitch"
            onPress={handleSignIn}
            icon={TwitchImg}
            buttonType="twitch"
          />
        </View>
      </View>
    </Background>
  );
}


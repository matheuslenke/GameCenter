import React, { useCallback } from 'react';

import {
  View, Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';
import { theme } from '../../global/theme';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import DiscordImg from '../../assets/discord.svg';
import AppleImg from '../../assets/appleLogo.svg';
import GoogleImg from '../../assets/googleLogo.svg';


export function SignIn(){

  const navigation = useNavigation();
  
  function handleSignIn() {
      navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <View>
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
          <ButtonIcon
            title="Entrar com Google"
            onPress={handleSignIn}
            icon={GoogleImg}
            buttonType="other"
          />
           <View style={{height: 18}} />
           <ButtonIcon
            title="Entrar com Apple"
            onPress={handleSignIn}
            icon={AppleImg}
            buttonType="other"
          />
          <View style={{height: 18}} />
           <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
            icon={DiscordImg}
            buttonType="discord"
          />
        </View>
      </View>
    </Background>
  );
}


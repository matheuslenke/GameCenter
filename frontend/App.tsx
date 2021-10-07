import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';

import { useFonts, Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { GamesProvider } from './src/hooks/games';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  LogBox.ignoreAllLogs();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if(!fontsLoaded) {
    return <AppLoading/ >
  }

  return (
    <Background>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <GamesProvider>
          <Routes />
        </GamesProvider>
      </AuthProvider>
    </Background>
  );
}


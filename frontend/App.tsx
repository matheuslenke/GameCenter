import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import { useFonts, Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
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
      <Routes />
    </Background>
  );
}


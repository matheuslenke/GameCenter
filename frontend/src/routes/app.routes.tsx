import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/theme';

import { Home } from '../screens/Home';
import { GameDetails } from '../screens/GameDetails';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: theme.colors.secondary90,
          },
        }}
      >
        <Screen 
          name="Home"
          component={Home}
        />
        <Screen 
          name="GameDetails"
          component={GameDetails}
          options={{title: 'Detalhes do jogo'}}
        />
      </Navigator>
  )
}
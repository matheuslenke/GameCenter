import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/theme';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';

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
      </Navigator>
  )
}
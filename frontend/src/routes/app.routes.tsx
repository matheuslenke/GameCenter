import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCmIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../global/theme';

import { Home } from '../screens/Home';
import { GameDetails } from '../screens/GameDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from '../screens/Profile';
import { CreateGame } from '../screens/CreateGame';
import { View } from 'react-native';

const GamesStackNavigator = createStackNavigator();

function GamesRoutes() {
  return (
    <GamesStackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: theme.colors.secondary90,
          },
        }}
      >
        <GamesStackNavigator.Screen 
          name="Home"
          component={Home}
        />
        <GamesStackNavigator.Screen 
          name="GameDetails"
          component={GameDetails}
        />
      </GamesStackNavigator.Navigator>
  )
}

const CreateGameStackNavigator = createStackNavigator();

function CreateGameRoutes() {
  return (
    <CreateGameStackNavigator.Navigator
      initialRouteName="CreateGame"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary90,
        },
      }}
    >
      <CreateGameStackNavigator.Screen 
        name="CreateGame"
        component={CreateGame}
      />

    </CreateGameStackNavigator.Navigator>
  )
}

const ProfileStackNavigator = createStackNavigator();

function ProfileRoutes() {
  return (
    <ProfileStackNavigator.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary90,
        },
      }}
    >
      <ProfileStackNavigator.Screen 
        name="Profile"
        component={Profile}
      />

    </ProfileStackNavigator.Navigator>
  )
}

const { Navigator, Screen } = createBottomTabNavigator();

function TabBarBackground() {
  return (
    <View style={{backgroundColor: theme.colors.secondary70}}>

    </View>
  )
}


export function AppRoutes() {
  return (
      <Navigator
        initialRouteName="AppRoutes"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary90,
          tabBarInactiveTintColor: theme.colors.highlight,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            height: 88,
          }
        }}
      >
        <Screen 
          name="Meus jogos"
          component={GamesRoutes}
          options={{
            tabBarIcon: ( ({size, color}) => (
              <Ionicons
                name="game-controller"
                size={size}
                color={color}
              />
            ) )
          }}
        />
        <Screen 
          name="Adicionar Jogo"
          component={CreateGameRoutes}
          options={{
            tabBarIcon: ( ({size, color}) => (
              <MaterialCmIcons
                name="gamepad"
                size={size}
                color={color}
              />
            ) )
          }}
        />
        <Screen 
          name="Meu Perfil"
          component={ProfileRoutes}
          options={{
            tabBarIcon: ( ({size, color}) => (
              <MaterialIcons
                name="person"
                size={size}
                color={color}
              />
            ) )
          }}
        />
      </Navigator>
  )
}
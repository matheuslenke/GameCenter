import React,
{
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react'

import * as AuthSession from 'expo-auth-session';
// import AsyncStorage from '@react-native-async-storage/async-storage'

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

// import { api } from '../services/api';
// import { COLLECTION_USERS } from '../configs/database';
import { useEffect } from 'react';
import { api } from '../services/api';
import { apiIGDB } from '../services/apiIGDB';
import axios, { AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_GAMES } from '../config/database';

export type GameData = {
  id: string;
  cover: {
    image_id: string;
  }
  first_release_date: number;
  franchises?: {
    name: string;
    url: string;
  }[];
  game_modes: {
    id: string;
    name: string;
  }[];
  genres: {
    id: string;
    name: string;
  }[];
  involved_companies: {
    id: string;
    company: {
      name: string;
    }
  }[];
  platforms: {
    id: string;
    name: string;
  }[];
  screenshots?: {
    id: string;
    image_id: string;
  }[];
  rating: number;
  name: string;
  summary: string;
  url: string;
  websites: {
    id: string;
    url: string;
  }[];
}

export type enumGameStatusCategory = 'WISHLIST' | 'BACKLOG' | 'PLAYING' | 'FINISHED' | 'ABANDONED'

export type Game = {
  id: string;
  gameIgdbId: string;
  gameStatus: enumGameStatusCategory
  gameStartedPlayingDate: Date | undefined;
  gameFinishedPlayingDate: Date | undefined;
  gameData?: GameData;
}


type GamesContextData = {
  games: Game[];
  loading: boolean;
  addNewGame: (game: Game) => void;
  loadGamesFromGameCenter: () => void;
  deleteGame: (game: Game) => void;
  updateGame: (data: UpdateGameParams) => void;
  getGameById: (id: string) => Game | undefined;
}

type GamesProviderProps = {
  children: ReactNode;
}

type UpdateGameParams = {
  game: Game;
  status: enumGameStatusCategory;
  gameStartedPlayingDate?: Date;
  gameFinishedPlayingDate?: Date;
}

export const GamesContext = createContext({} as GamesContextData);

function GamesProvider({ children }: GamesProviderProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  function getGameById(id: string) {
    return games.find(game => game.id === id)
  }

  async function addNewGame({ gameIgdbId, gameStatus, gameStartedPlayingDate, gameFinishedPlayingDate, gameData }: Game) {
    try {
      console.log(gameStartedPlayingDate, gameFinishedPlayingDate)
      const response = await api.post('/api/games', {
        gameIgdbId,
        gameStatus,
        gameStartedPlayingDate,
        gameFinishedPlayingDate,
      })
      const data = response.data as Game
      const actualGames = [...games]
      actualGames.push({
        id: data.id,
        gameIgdbId,
        gameStatus,
        gameStartedPlayingDate,
        gameFinishedPlayingDate,
        gameData
      })
      setGames(actualGames)
    } catch(error) {
        Alert.alert('Falha ao adicionar um novo jogo!')
    }
  }

  async function fetchGameData(data: Game[], results: GameData[]) {
    for (let item of data) {
      const requestBody = `fields id, name, cover.image_id, first_release_date,
      franchises.name,
      platforms.id, platforms.category, platforms.platform_logo.image_id, platforms.name,
      game_modes.*,genres.*,involved_companies.id, involved_companies.company.id, involved_companies.company.name,rating,rating_count,screenshots.image_id, summary,url,status,websites.*;
      where id = ${item.gameIgdbId} ;`
      await apiIGDB.post('games', requestBody).then(result => {
        results.push(result.data[0])})
    }
  }

  async function loadGamesFromGameCenter() {
    try {
      setLoading(true)
      const response = await api.get('/api/games')
      const data = response.data as Game[]
      
      let results: GameData[] = []
        
      await fetchGameData(data, results);

      for (let result of results) {
        const gameIndex = data.findIndex(item => item.gameIgdbId === String(result.id) && item.gameData === undefined)
        data[gameIndex].gameStartedPlayingDate = new Date(data[gameIndex].gameStartedPlayingDate as unknown as string) 
        data[gameIndex].gameFinishedPlayingDate = new Date(data[gameIndex].gameFinishedPlayingDate as unknown as string) 
        data[gameIndex].gameData = result
      }
      setGames(data)
      
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }

  async function updateGame({ game, status, gameFinishedPlayingDate, gameStartedPlayingDate}: UpdateGameParams) {
    try {
      const response = await api.put(`/api/games/${game.id}`, {
        gameStartedPlayingDate: gameStartedPlayingDate?.toISOString() ,
        gameFinishedPlayingDate: gameFinishedPlayingDate?.toISOString(),
        gameStatus: status
      })

      const data = response.data as Game

      const existingGameIndex = games.findIndex(item => item.id === game.id)
      const existingGame = games[existingGameIndex]
      const actualGames = [...games];


      existingGame.gameStatus = data.gameStatus;
      existingGame.gameStartedPlayingDate = data.gameStartedPlayingDate;
      existingGame.gameFinishedPlayingDate = data.gameFinishedPlayingDate;
      actualGames.splice(existingGameIndex, 1)
      actualGames.push(existingGame)
      setGames(actualGames)
    } catch ( error) {
      Alert.alert("Ocorreu um erro ao atualizar este jogo")
    }
  }

  async function deleteGame(game: Game) {
    try {
      await api.delete(`/api/games/${game.id}`)
      const existingGame = games.findIndex(item => item.id === game.id)
      const actualGames = [...games];
      actualGames.splice(existingGame, 1)
      setGames(actualGames)
    } catch (error) {
      Alert.alert("Ocorreu um erro ao excluir jogo")
    }
  }


  async function loadGamesStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_GAMES);

    if (storage) {
      const games = JSON.parse(storage) as Game[];

      setGames(games)
    }
  }
  async function saveGamesStorageData() {
    await AsyncStorage.setItem(COLLECTION_GAMES, JSON.stringify(games))
  }

  useEffect(() => {
    loadGamesStorageData()
  }, [])

  useEffect(() => {
    saveGamesStorageData()
  }, [games])

  return (
    <GamesContext.Provider value={{
      games,
      loading,
      addNewGame,
      loadGamesFromGameCenter,
      deleteGame,
      updateGame,
      getGameById
    }} >
      { children }
    </GamesContext.Provider>
    
  )
}

function useGames() {
  const context = useContext(GamesContext)

  return context;
}

export {
  GamesProvider,
  useGames,
}
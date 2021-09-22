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
    id: number;
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

export type Game = {
  id: string;
  igdb_id: string;
  status: 'WISHLIST' | 'BACKLOG' | 'PLAYING' | 'FINISHED' | 'ABANDONED'
  startedAt: Date | undefined;
  finishedAt: Date | undefined;
  gameData: GameData | undefined;
}

export type GameRequest = {
  igdb_id: string;
  status: 'WISHLIST' | 'BACKLOG' | 'PLAYING' | 'FINISHED' | 'ABANDONED'
  startedAt: Date | undefined;
  finishedAt: Date | undefined;
  gameData: GameData;
}


type AuthContextData = {
  games: Game[];
  loading: boolean;
  addNewGame: (game: GameRequest) => void;
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
    error?: string;
  }
}

export const GamesContext = createContext({} as AuthContextData);

function GamesProvider({ children }: AuthProviderProps) {
  const [games, setGames] = useState<Game[]>([
    {  
      id: '1',
      igdb_id: '113112',
      status: 'ABANDONED',
      startedAt: new Date('2021-08-21'),
      finishedAt: new Date(),
      gameData: {
        id: '113112',
        cover: {
          image_id: 'co39vc'
        },
        first_release_date: 1600300800,
        game_modes: [{
          id: '1',
          name: "Single player"
        }],
        genres: [{
          id: '12',
          name: 'Role-playing (RPG)',
        },
        {
          id: '25',
          name: "Hack and slash/Beat \'em up\'",
        },
        {
          id: '31',
          name: "Hack and slash/Beat \'em up\'",
        },
        {
          id: '33',
          name: "Hack and slash/Beat \'em up\'",
        },
      ],
        involved_companies: [{
          id: '108827',
          company: {
            name: "Supergiant Games",
          }
        }],
        platforms: [{
          id: '6',
          name: "PC (Microsoft Windows)",
        },
        {
          id: '14',
          name: "Mac",
        },
        {
          id: '48',
          name: "PlayStation 4",
        },
        {
          id: '49',
          name: "Xbox One",
        },
        {
          id: '130',
          name: "Nintendo Switch",
        },
      ],
        screenshots: [{
          id: '268555',
          image_id: "sc5r7v",
        }],
        rating: 92.5333348092417,
        name: "Hades",
        summary: "A rogue-lite hack and slash dungeon crawler in which Zagreus, son of Hades the Greek god of the dead, attempts to escape his home and his oppressive father by fighting the souls of the dead through the various layers of the ever-shifting underworld, while getting to know and forging relationships with its inhabitants.",
        url: "https://www.igdb.com/games/hades--1",
        websites: [{
          id: '95305',
          url: "https://en.wikipedia.org/wiki/Hades_(video_game)",
        }],
      }
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function addNewGame(game: GameRequest) {
    // Conectar com API
  }


  async function loadUserStorageData() {
    // const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    // if (storage) {
    //   const userLogged = JSON.parse(storage) as User;
    //   api.defaults.headers.authorization = `Bearer ${userLogged.token}`

    //   setUser(userLogged)
    // }
  }

  // useEffect(() => {
  //   loadUserStorageData()
  // }, [])

  return (
    <GamesContext.Provider value={{
      games,
      loading,
      addNewGame,
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
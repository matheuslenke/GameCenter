import React,
{
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react'

import { makeRedirectUri, useAuthRequest, AuthSessionResult, startAsync } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage'

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

// import { api } from '../services/api';
import { COLLECTION_USERS } from '../config/database';
import { twitchApi, twitchClientId } from '../services/twitchApi'
import { makeUrl } from 'expo-linking';
import { Alert } from 'react-native';
import { api } from '../services/api';

type User = {
  id: string;
  login: string;
  display_name: string;
  avatar: string;
  email: string;
  token: string;
  localApi?: ApiUser
}
type ApiUser = {
  id: string;
  login: string;
  epicCode: string;
  nintendoSwitchCode: string;
  psnCode: string;
  steamCode: string;
  xboxCode: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSessionResult & {
  type: string;
  params: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    error?: string;
  }
}

type TwitchUserResponse = {
  data: {
    id: string;
    email: string;
    display_name: string;
    profile_image_url: string;
    login: string;
  }[]
}

type LocalApiRegisterResponse = {
  data: {
    id: string;
    login: string;
    epicCode: string;
    nintendoSwitchCode: string;
    psnCode: string;
    steamCode: string;
    xboxCode: string;
  }
}

type LocalApiSignInResponse = {

}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function getTwitchUserInformation(twitchToken: string) {
    try {
      const response = await twitchApi.get('helix/users');
      const { data } = response.data as TwitchUserResponse;
      const userInfo = data[0];
      const userData = {
        id: userInfo.id,
        avatar: userInfo.profile_image_url,
        email: userInfo.email,
        login: userInfo.login,
        display_name: userInfo.display_name,
        token: twitchToken,
      }
      setUser(userData)
      await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData))
      return userData
    } catch ( error ) {
      Alert.alert('Error ao pegar dados da Twitch')
    }
  }

  async function signInLocalAPI(userData: User) {
    try {
      const login = await api.post('/login', {
        login: userData.email,
        password: userData.display_name
      })

      if (login.status === 200) {
        api.defaults.headers.authorization = `Bearer ${login.data}`

      } else {
        // User needs to register
        await api.post('/user', {
          login: userData.email,
          password: userData.display_name
        })

        const login = await api.post('/login', {
          login: userData.email,
          password: userData.display_name
        })
        api.defaults.headers.authorization = `Bearer ${login.data}`
      }
      // Pegando dados do usuário na API
      const userApiData = await api.get('/api/user/@me');
      userData.localApi = userApiData.data as ApiUser
      userData.localApi.token = `Bearer ${login.data}`

      await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData))

    } catch (error) {
      Alert.alert(error as string)
    }
  }

  async function signIn() {
    try {
      setLoading(true);

      const CLIENT_ID = '70u2ib0ndnbmao4z6njvu85vaki5t1';
      const REDIRECT_URI = 'https://auth.expo.io/@matheuslenke/gamecenter';
      const RESPONSE_TYPE = 'token';
      const SCOPE = 'openid%20user_read%20analytics:read:games';

      const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await startAsync( { authUrl } ) as AuthorizationResponse;

      if(type === "success" && !params.error){
        twitchApi.defaults.headers.authorization = `Bearer ${params.access_token}`;
        const userData = await getTwitchUserInformation(params.access_token) as User

        signInLocalAPI(userData)
      }
    } catch ( error ) {
      throw new Error('Erro ao fazer a autenticação.');
    } finally {
      setLoading( false )
    }
   
  }

  async function signOut() {
    await AsyncStorage.removeItem(COLLECTION_USERS)
    setUser({} as User)
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      twitchApi.defaults.headers.authorization = `Bearer ${userLogged.token}`
      api.defaults.headers.authorization = `Bearer ${userLogged.localApi?.token}`
      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserStorageData()
  }, [])


  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut,
      loading,
    }} >
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context;
}

export {
  AuthProvider,
  useAuth,
}
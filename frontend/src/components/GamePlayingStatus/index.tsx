import React, { useState } from 'react';

import {
  View,
  Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Game, useGames } from '../../hooks/games';
import { formatDate } from '../../utils/dateFormatter';
import { Load } from '../Load';

import { styles } from './styles';

type Props = {
  data: Game
}

export function GamePlayingStatus({ data }: Props) {
  const [loading, setLoading] = useState(false)
  const showFirstButton = data.gameStatus === 'WISHLIST' || data.gameStatus === 'BACKLOG' || data.gameStatus === 'PLAYING' || data.gameStatus === 'ABANDONED'
  const showSecondsButton = data.gameStatus === 'PLAYING'

  const { updateGame } = useGames()

  let statusText = 'Lista de Desejos'
  let buttonText = 'Marcar como \n finalizado'
  let startedText = 'Não iniciado'
  let finishedText = ''

  switch (data.gameStatus) {
    case 'WISHLIST':
      startedText = 'Não adquirido'
      buttonText = 'Adicionar ao Backlog'
      break;
    case 'BACKLOG':
      startedText = 'Não Iniciado'
      buttonText = 'Iniciar jogatina'
      statusText = 'Backlog'
      break;
    case 'PLAYING':
      buttonText = 'Marcar como finalizado'
      startedText = `Iniciado em ${formatDate(data.gameStartedPlayingDate || new Date())}`
      finishedText = 'Não finalizado'
      statusText = 'Jogando'
      break;
    case 'FINISHED':
      startedText = `Iniciado em ${formatDate(data.gameStartedPlayingDate || new Date())}`
      finishedText = `Finalizado em ${formatDate(data.gameFinishedPlayingDate || new Date())}`
      statusText = 'Finalizado'
      break;
    case 'ABANDONED':
      startedText = `Iniciado em ${formatDate(data.gameStartedPlayingDate || new Date())}`
      finishedText = `Abandonado em ${formatDate(data.gameFinishedPlayingDate || new Date())}`
      statusText = 'Abandonado'
      buttonText = 'Retomar jogatina'
      break;
  }
  const showCenterOrSpaceBetween = (showSecondsButton && showFirstButton ) ? true : false

  function handleUpdate() {
    setLoading(true)
    switch (data.gameStatus) {
      case 'WISHLIST':
        updateGame({ game: data, status: 'BACKLOG'} )
        break;
      case 'BACKLOG':
        updateGame({game: data, status: 'PLAYING', gameStartedPlayingDate: new Date()})
        break;
      case 'PLAYING':
        updateGame({game: data, status: 'FINISHED', gameStartedPlayingDate: new Date()})
        break;
      case 'ABANDONED':
        updateGame({game: data, status: 'PLAYING', gameStartedPlayingDate: new Date()})
        break;
    }
    setLoading(false)
  }
  function handleAbandon() {
    updateGame({game: data, status: 'ABANDONED', gameFinishedPlayingDate: new Date()})
  }

  if(loading) {
    return (
      <View style={styles.container}>
        <Load />
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.gameStatus}>
        <View style={styles.playStatus}>
          <Text style={styles.statusText}>Status: </Text>
          <Text style={styles.text}>{ statusText }</Text>
        </View>
        <Text style={styles.text}>{startedText}</Text>
        <Text style={styles.text}>{finishedText}</Text>
      </View>
      <View style={[ styles.buttons, showCenterOrSpaceBetween && { justifyContent: 'space-between' } ]}>
        {
          showFirstButton &&
          <RectButton 
            style={styles.primaryButton}
            onPress={handleUpdate}
          >
           <Text style={styles.buttonText}>
                {buttonText}
            </Text> 
          </RectButton>
        }
        {
          showSecondsButton &&
          <RectButton 
            style={styles.secondaryButton}
            onPress={handleAbandon}
          >
            <Text style={styles.buttonText}>
              Abandonar jogo
            </Text>
          </RectButton>
        }
      </View>
    </View>
  );
}
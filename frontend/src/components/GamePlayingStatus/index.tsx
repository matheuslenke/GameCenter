import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Game } from '../../hooks/games';
import { formatDate } from '../../utils/dateFormatter';

import { styles } from './styles';

type Props = {
  data: Game
}

export function GamePlayingStatus({ data }: Props) {
  const { gameData } = data;

  const showFirstButton = data.status === 'WISHLIST' || data.status === 'BACKLOG' || data.status === 'PLAYING' || data.status === 'ABANDONED'
  const showSecondsButton = data.status === 'PLAYING'

  let statusText = 'Lista de Desejos'
  let buttonText = 'Marcar como \n finalizado'
  let startedText = 'Não iniciado'
  let finishedText = ''

  switch (data.status) {
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
      startedText = `Iniciado em ${formatDate(data.startedAt || new Date())}`
      finishedText = 'Não finalizado'
      statusText = 'Jogando'
      break;
    case 'FINISHED':
      startedText = `Iniciado em ${formatDate(data.startedAt || new Date())}`
      finishedText = `Finalizado em ${formatDate(data.finishedAt || new Date())}`
      statusText = 'Finalizado'
      break;
    case 'ABANDONED':
      startedText = `Iniciado em ${formatDate(data.startedAt || new Date())}`
      finishedText = `Abandonado em ${formatDate(data.finishedAt || new Date())}`
      statusText = 'Abandonado'
      buttonText = 'Retomar jogatina'
      break;
  }

  const showCenterOrSpaceBetween = (showSecondsButton && showFirstButton ) ? true : false

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
            onPress={() => {}}
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
            onPress={() => {}}
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
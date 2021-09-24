import React, { useState } from 'react';

import {
  Text,
  View,
  Alert,
} from 'react-native';
import { Button } from '../../components/Forms/Button';
import { GameSelect } from '../../components/Forms/GameSelect';
import { GameStatusSelect } from '../../components/Forms/GameStatusSelect';
import { GameCard } from '../../components/GameCard';
import { ModalView } from '../../components/ModalView';
import { enumGameStatusCategory, Game, GameData, useGames } from '../../hooks/games';
import { GameSelectModal } from '../GameSelectModal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from './styles';
import { categoriesSelect, GameCategoryType } from '../../utils/categories'
import { DatePickerInput } from '../../components/Forms/DatePickerInput';
import { useNavigation } from '@react-navigation/core';

export type InputDate = {
  day: string;
  month: string;
  year: string;
}

export function CreateGame(){
  const [gameName, setGameName] = useState("")
  const [game, setGame] = useState<GameData | undefined>(undefined)
  const [gameSelectModalOpen, setGameSelectModalOpen] = useState(false)
  const [gameCategory, setGameCategory] = useState<enumGameStatusCategory>('WISHLIST')

  const [startDate, setStartDate] = useState<InputDate>({day: '', month: '', year: ''})
  const [endDate, setEndDate] = useState<InputDate>({day: '', month: '', year: ''})

  const { addNewGame } = useGames();

  function handleOpenGameSelectModal() {
    if(gameName.length > 0) {
      setGameSelectModalOpen(true)
    } else {
      Alert.alert("Você precisa digitar o nome de um jogo!")
    }
  }

  function handleCloseGameSelectModal() {
    setGameSelectModalOpen(false)
  }

  async function handleAddNewGame() {
    const sendingObject = {} as Game
    let newStartDate = undefined;
    let newEndDate = undefined;

    if (gameCategory === 'PLAYING' ) {
      if (startDate.day !== '' && startDate.month !== '' && startDate.year !== '') {
        newStartDate = new Date(`${startDate.year}-${startDate.month}-${startDate.day}`)
        if(!newStartDate) {
          Alert.alert("Erro com a data")
        }
        sendingObject.gameStartedPlayingDate = newStartDate
      }
    } else if (gameCategory === 'FINISHED' || gameCategory === 'ABANDONED' ) {
      if (startDate.day !== '' && startDate.month !== '' && startDate.year !== '') {
        newStartDate = new Date(`${startDate.year}-${startDate.month}-${startDate.day}`)
        sendingObject.gameStartedPlayingDate = newStartDate
        if(!newStartDate) {
          Alert.alert("Erro com a data")
        }
      }
      if (endDate.day !== '' && endDate.month !== '' && endDate.year !== '') {
        newEndDate = new Date(`${endDate.year}-${endDate.month}-${endDate.day}`)
        sendingObject.gameFinishedPlayingDate = newEndDate
        if(!newEndDate) {
          Alert.alert("Erro com a data")
        }
      }
    }
    if(game === undefined || game.id === undefined) {
      Alert.alert("Erro", "Erro ao adicionar jogo")
      return
    }

    sendingObject.gameIgdbId = game.id;
    sendingObject.gameData = game
    sendingObject.gameStatus = gameCategory

    addNewGame(sendingObject);
    Alert.alert("Sucesso!", "Jogo adicionado com sucesso!")
    setGame(undefined);
    setStartDate({day: '', month: '', year: ''})
    setEndDate({day: '', month: '', year: ''})
    setGameCategory('WISHLIST')
    setGameName('')
  }
  
  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.scrollView}
          extraScrollHeight={120}
          viewIsInsideTabBar={true}
          contentContainerStyle={{flex: 1}}
        >
            <Text style={styles.title}>Adicionar jogo</Text>
            <View style={styles.form}>
              <View style={styles.inputs}>
                <GameSelect 
                  placeholder="Pesquisar jogo"
                  gameName={gameName}
                  setGameName={setGameName}
                  onPressSearch={handleOpenGameSelectModal}
                />
                {
                  game !== undefined ? (
                    <>
                    <GameCard
                      style={{height: 170, marginVertical: 20}} 
                      data={game}
                    />
                    <Text style={styles.title}>Selecione a categoria</Text>
                    <GameStatusSelect 
                      options={categoriesSelect}
                      selectedValue={gameCategory}
                      setSelectedValue={setGameCategory}
                    />
                    </>
                  ) : (
                        <View style={styles.placeHolder}>
                          <Text style={styles.title}>Escolha seu jogo!</Text>
                        </View>
                      )
                }
                <View style={styles.content}>
                {
                  gameCategory === 'PLAYING' &&
                  <DatePickerInput
                    date={startDate}
                    setDate={setStartDate}
                    title="Data de início da jogatina"
                  />
                }
                {
                  (gameCategory === 'FINISHED' || gameCategory === 'ABANDONED') &&
                  (
                    <>
                      <DatePickerInput
                        date={startDate}
                        setDate={setStartDate}
                        title="Data de início da jogatina"
                      />
                      <DatePickerInput
                        date={endDate}
                        setDate={setEndDate}
                        title="Data de término da jogatina"
                      />
                    </>
                  )
                }
              
                </View>
              </View>

              <View style={{justifyContent: 'center', paddingHorizontal: 50}}>
                  <Button title="Adicionar jogo" onPress={handleAddNewGame} />
              </View>
            </View>
            <ModalView
              visible={gameSelectModalOpen}
              closeModal={handleCloseGameSelectModal}
              >
              <GameSelectModal 
                closeSelectGame={handleCloseGameSelectModal}
                setGame={setGame}
                gameName={gameName}
                />
            </ModalView>
          </KeyboardAwareScrollView>
      </View>
      
  );
}
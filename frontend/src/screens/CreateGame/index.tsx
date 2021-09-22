import React, { useState } from 'react';

import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { Button } from '../../components/Forms/Button';
import { GameSelect } from '../../components/Forms/GameSelect';
import { GameStatusSelect } from '../../components/Forms/GameStatusSelect';
import { GameCard } from '../../components/GameCard';
import { PlaceholderCard } from '../../components/GameCard/PlaceholderCard';
import { ModalView } from '../../components/ModalView';
import { Game } from '../../hooks/games';
import { GameSelectModal } from '../GameSelectModal';

import { styles } from './styles';
import { categoriesSelect } from '../../utils/categories'
import { DatePickerInput } from '../../components/Forms/DatePickerInput';

export type InputDate = {
  day: string;
  month: string;
  year: string;
}

export function CreateGame(){
  const [gameName, setGameName] = useState("")
  const [game, setGame] = useState<Game | undefined>(undefined)
  const [gameSelectModalOpen, setGameSelectModalOpen] = useState(false)
  const [gameCategory, setGameCategory] = useState('WISHLIST')

  const [startDate, setStartDate] = useState({day: '', month: '', year: ''} as InputDate)
  const [endDate, setEndDate] = useState({day: '', month: '', year: ''} as InputDate)

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
  
  return (
    <View style={styles.container}>
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
          <Button title="Adicionar jogo" />
        </View>
      </View>

      <ModalView
        visible={gameSelectModalOpen}
        closeModal={handleCloseGameSelectModal}
        
        >
        <TouchableWithoutFeedback onPress={handleCloseGameSelectModal}>  
        <GameSelectModal 
          closeSelectGame={handleCloseGameSelectModal}
          setGame={setGame}
          gameName={gameName}
          />
        </TouchableWithoutFeedback>
      </ModalView>
    </View>
  );
}
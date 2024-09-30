import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Background, ListGroups, ModalBTN } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Modal, Text, View } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Context } from '../../context/context';
import ModalCreateGP from '../../components/ModalCreateGP';


export default function ChatRoom() {

  const { handleHasUser, user } = useContext(Context)

  const navigation = useNavigation();

  const IsFocused = useIsFocused()
  const [list, setList] = useState([{ name: 'a' }, { name: 'a' }])

  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    handleHasUser()
  }, [IsFocused])

  return (
    <Background>
      <Header checkedLogin={!!user} />
      <ModalBTN onPress={() => {
        user ? setModalVisible(true) : navigation.navigate('SignIn')
      }
      }>
        <Icon name='plus' color={'#fff'} size={35} />
      </ModalBTN>
      <ListGroups renderItem={({ item }) => <View><Text> {item.name}</Text></View>} data={list} />

      <Modal visible={modalVisible} transparent={true} animationType='fade'>
        <ModalCreateGP setVisible={() => setModalVisible(false)} />
      </Modal>

    </Background>

  )
}


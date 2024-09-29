import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import { Background, ListGroups, ModalBTN } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Modal, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/context';
import ModalCreateGP from '../../components/ModalCreateGP';


export default function ChatRoom() {

  const { type } = useContext(Context)
  const navigation = useNavigation();
  const [list, setList] = useState([{ name: 'a' }, { name: 'a' }])
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Background>
      <Header checkedLogin={type} />
      <ModalBTN onPress={() => setModalVisible(true)}>
        <Icon name='plus' color={'#fff'} size={35} />
      </ModalBTN>
      <ListGroups renderItem={({ item }) => <View><Text> {item.name}</Text></View>} data={list} />

      <Modal visible={modalVisible} transparent={true} animationType='fade'>
        <ModalCreateGP setVisible={() => setModalVisible(false)} />
      </Modal>

    </Background>

  )
}


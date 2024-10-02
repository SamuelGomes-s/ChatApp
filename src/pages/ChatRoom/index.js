import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Background, ListGroups, ModalBTN } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ActivityIndicator, Alert, Modal, Text, View } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Context } from '../../context/context';
import ModalCreateGP from '../../components/ModalCreateGP';
import firestore from '@react-native-firebase/firestore';
import RoomList from '../../components/RoomList';


export default function ChatRoom() {

  const { handleHasUser, user, } = useContext(Context)

  const navigation = useNavigation();

  const IsFocused = useIsFocused()
  const [list, setList] = useState([])
  const [renderUpdate, setRenderUpdate] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    handleHasUser()

  }, [IsFocused])


  useEffect(() => {
    let isActive = true

    function handleGetChats() {

      firestore()
        .collection('MESSAGE_THREADS')
        .orderBy('lastMessage', 'desc')
        .limit(10)
        .get().then((snapshot) => {
          const threads = snapshot.docs.map(documentSnapshot => {
            return {
              _id: documentSnapshot.id,
              name: '',
              lastMessage: { text: '' },
              ...documentSnapshot.data()
            }
          })

          if (isActive) {
            setList(threads)
            setLoading(false)
          }
        })


    }
    handleGetChats()
    return () => isActive = false
  }, [IsFocused, renderUpdate])

  function handleDeleteRoom(owner, idRoom) {

    if (owner !== user?.uid) return

    Alert.alert(
      'Atenção!',
      'Você tem certeza que deseja deletar essa sala?',
      [
        { text: 'Cancelar', onPress: () => { }, style: 'cancel' },
        { text: 'Confirmar', onPress: () => deleteRoom(idRoom), style: 'confirm' }
      ]
    )


  }

  async function deleteRoom(id) {
    try {
      await firestore().collection('MESSAGE_THREADS').doc(id).delete()
      setRenderUpdate(!renderUpdate)

    } catch (error) {
      console.log(error)
    }
  }


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={90} color={'#216dfb'} />
      </View>
    )
  }



  return (
    <Background>
      <Header checkedLogin={!!user} />
      <ModalBTN onPress={() => {
        user ? setModalVisible(true) : navigation.navigate('SignIn')
      }
      }>
        <Icon name='plus' color={'#fff'} size={35} />
      </ModalBTN>
      <ListGroups
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({ item }) => <RoomList data={item} deleteRoom={() => handleDeleteRoom(item.owner, item._id)} />} />

      <Modal visible={modalVisible} transparent={true} animationType='fade'>
        <ModalCreateGP setVisible={() => setModalVisible(false)} chekedUpdate={() => setRenderUpdate(!renderUpdate)} />
      </Modal>

    </Background>

  )
}


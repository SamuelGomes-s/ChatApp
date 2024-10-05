import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SearchButton, Container, SearchInput, SearchArea, SearchList } from './styles';
import RoomList from '../../components/RoomList';
import firestore from '@react-native-firebase/firestore';
import { Keyboard } from 'react-native';
import { Context } from '../../context/context';


export default function Search() {
  const [input, setInput] = useState('')
  const [list, setList] = useState()
const {handleDeleteRoom} = useContext(Context)
  async function searchRoom() {
    if (input === '') return;

    const response = await firestore().collection('MESSAGE_THREADS').where('name', '>=', input).where('name', '<=', input + '\uf8ff')
      .get().then((snapshot) => {

        const threads = snapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            name: '',
            lastMessage: { text: '' },
            ...documentSnapshot.data()
          }
        })
        setList(threads)

        setInput('')
        Keyboard.dismiss();
      }).catch((error) => { console.log(error) })

  }
 
  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder='Digite o grupo que está procurando'
          value={input}
          onChangeText={(text) => setInput(text)} />
        <SearchButton onPress={() => searchRoom()}>
          <Icon name='magnify' color={'#fff'} size={30} />
        </SearchButton>
      </SearchArea>
      <SearchList
        data={list}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>  <RoomList data={item} deleteRoom={() => handleDeleteRoom(item.owner, item._id)} />} />
    </Container>
  )
}
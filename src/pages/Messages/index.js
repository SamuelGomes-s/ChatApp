import React, { useContext, useEffect, useState } from 'react';
import { AreaButton, AreaInput, Container, ContentInput, ContentMessages, Input, ListMessages, SubmitButton } from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import { Text } from 'react-native';
import { Context } from '../../context/context';
import firestore from '@react-native-firebase/firestore'
import MessageFeed from '../../components/MessageFeed';

export default function Messages({ route }) {

  const { thread } = route.params
  const [message, setMessage] = useState([])
  const [inputMSG, setInputMSG] = useState('')
  const { user } = useContext(Context)

  useEffect(() => {

    const unsubscribeListener = firestore().collection('MESSAGE_THREADS').doc(thread._id).collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(docItem => {
          const firebaseData = docItem.data()

          const data = {
            _id: docItem.id,
            text: '',
            createdAt: firestore.FieldValue.serverTimestamp(),
            ...firebaseData
          }

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.displayName
            }

          }
          return data
        })
        setMessage(messages)

      })
    return () => unsubscribeListener()
  }, [])

  function sendMSG() {
    if (inputMSG === '') return

    handleSendMSG()
  }

  async function handleSendMSG() {

    await firestore().collection('MESSAGE_THREADS').doc(thread._id).collection('MESSAGES').add({
      text: inputMSG,
      createdAt: firestore.FieldValue.serverTimestamp(),
      user: {
        _id: user.uid,
        displayName: user.displayName
      }
    })

    await firestore().collection('MESSAGE_THREADS').doc(thread._id).set({
      lastMessage: {
        text: inputMSG,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }

    },
      {
        merge: true
      })

    setInputMSG('')
  }
  return (
    <Container>
      <ContentMessages>
        <ListMessages
          data={message}
          keyExtractor={item => item._id}
          inverted={true}
          renderItem={({ item }) => <MessageFeed data={item} userId={user.uid} />} showsVerticalScrollIndicator={false} />
      </ContentMessages>
      <ContentInput>
        <AreaInput>
          <Input placeholder='Digite a sua mensagem' value={inputMSG} onChangeText={(text) => setInputMSG(text)} multiline={true} />
        </AreaInput>
        <AreaButton>
          <SubmitButton onPress={() => sendMSG()}>
            <Icon name='paper-airplane' size={23} color={'#fff'} />
          </SubmitButton>
        </AreaButton>
      </ContentInput>
    </Container>
  )
}
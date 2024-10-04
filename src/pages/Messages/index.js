import React, { useEffect, useState } from 'react';

import { AreaButton, AreaInput, Container, ContentInput, ContentMessages, Input, ListMessages, SubmitButton } from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import { Text } from 'react-native';


export default function Messages({ route }) {

  const { thread } = route.params
  const [message, setMessage] = useState([])
  useEffect(()=>{

  },[])
  return (
    <Container>
      <ContentMessages>
        <ListMessages data={message} renderItem={({ item }) => <Text> teste</Text>} showsVerticalScrollIndicator={false} />
      </ContentMessages>
      <ContentInput>
        <AreaInput>
          <Input placeholder='Digite a sua mensagem' />
        </AreaInput>
        <AreaButton>
          <SubmitButton>
            <Icon name='paper-airplane' size={23} color={'#fff'} />
          </SubmitButton>
        </AreaButton>
      </ContentInput>
    </Container>
  )
}
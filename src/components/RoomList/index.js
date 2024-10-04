import React, { useContext } from 'react';

import { Container, LastMessage, Title, Content, ContentHeader } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/context';



export default function RoomList({ data, deleteRoom }) {
    const {user} = useContext(Context)

    const navigation = useNavigation()

    function openChat() {
        navigation.navigate('Messages', { thread: data })
    }
    return (
        <Container onPress={() => user ? openChat() : navigation.navigate('SignIn')} onLongPress={() => deleteRoom && deleteRoom()}>
            <Content>
                <ContentHeader>
                    <Title numberOfLines={1}> {data.name}</Title>
                </ContentHeader>
                <LastMessage numberOfLines={1}> {data.lastMessage.text}</LastMessage>
            </Content>
        </Container>
    )
}
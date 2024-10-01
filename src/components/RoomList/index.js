import React from 'react';

import { Container, LastMessage, Title, Content, ContentHeader } from './styles';



export default function RoomList({ data }) {
    return (
        <Container>
            <Content>
                <ContentHeader>
                    <Title numberOfLines={1}> {data.name}</Title>
                </ContentHeader>
                <LastMessage numberOfLines={1}> {data.lastMessage.text}</LastMessage>
            </Content>
        </Container>
    )
}
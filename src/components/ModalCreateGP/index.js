import React, { useContext, useState } from "react";
import {
    Container,
    TransparenteView,
    ContentActions,
    Text,
    Input,
    CreateButtonGP,
    ButtonText,
    AreaInput
} from "./styles";
import { TouchableWithoutFeedback } from "react-native";
import { Context } from "../../context/context";

import firestore from "@react-native-firebase/firestore";


export default function ModalCreateGP({ setVisible }) {

    const { user } = useContext(Context)

    const [nameChat, setNameChat] = useState('')

    function handleButtonCreate() {
        if (nameChat === '') {
            return
        }
        handleCreateRoom()
    }


    async function handleCreateRoom() {
        await firestore().collection('MESSAGE_THREADS').add({
            name: nameChat,
            owner: user.uid,
            lastMessage: {
                text: `Grupo ${nameChat} criado. Seja bem vindo(a)!`,
                createdAt: firestore.FieldValue.serverTimestamp(),

            }
        }).then((docRef) => {
            docRef.collection('MESSAGES').add({
                text: `Grupo ${nameChat} criado. Seja bem vindo(a)!`,
                createdAt: firestore.FieldValue.serverTimestamp(),
                system: true, //Para saber que a mensagem foi criada pelo systema.F
            }).then(() => setVisible())


        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => setVisible()}>
                <TransparenteView>
                </TransparenteView>
            </TouchableWithoutFeedback>

            <ContentActions>
                <Text> Criar um novo Grupo? </Text>
                <AreaInput>
                    <Input
                        placeholder="Nome da sala"
                        value={nameChat}
                        onChangeText={(text) => setNameChat(text)}
                    />
                </AreaInput>
                <CreateButtonGP onPress={() => handleButtonCreate()}>
                    <ButtonText> Criar sala </ButtonText>
                </CreateButtonGP>
            </ContentActions>
        </Container>
    )
}
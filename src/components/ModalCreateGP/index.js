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
import { Alert, TouchableWithoutFeedback } from "react-native";
import { Context } from "../../context/context";

import firestore from "@react-native-firebase/firestore";


export default function ModalCreateGP({ setVisible, chekedUpdate }) {

    const { user } = useContext(Context)

    const [nameChat, setNameChat] = useState('')



    function handleButtonCreate() {
        if (nameChat === '') {
            return
        }

        firestore().collection('MESSAGE_THREADS').get().then((snapshot) => {
            let limit = 0

            snapshot.docs.map(docItem => {


                if (docItem.data().owner === user.uid) {
                    limit += 1
                }
            })
            if (limit >= 5) {
                alert('Voce atingiu o limite de criação de salas.')

            } else {
                handleCreateRoom()
            }

        }).catch((error) => console.log(error))


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
            }).then(() => {
                chekedUpdate()
                setVisible()
            }
            )


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
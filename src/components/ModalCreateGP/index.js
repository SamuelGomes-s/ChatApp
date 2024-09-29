import React, { useState } from "react";
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


export default function ModalCreateGP({ setVisible }) {

    const [nameChat, setNameChat] = useState('')


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
                <CreateButtonGP onPress={() => setVisible()}>
                    <ButtonText> Criar sala </ButtonText>
                </CreateButtonGP>
            </ContentActions>
        </Container>
    )
}
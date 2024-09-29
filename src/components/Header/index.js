import React from "react";
import { AreaBTN, Container, IconBTN, Title } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header({ checkedLogin }) {

    return (
        <Container>
            {checkedLogin && <IconBTN>
                <Icon name='arrow-left' color={'#fff'} size={30} />
            </IconBTN>}
            <Title> Grupos </Title>
            <AreaBTN>
                <IconBTN>
                    <Icon name='magnify' color={'#fff'} size={30} />
                </IconBTN>
            </AreaBTN>
        </Container>
    )

}
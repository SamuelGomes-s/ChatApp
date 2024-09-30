import React, { useContext } from "react";
import { AreaBTN, Container, IconBTN, Title } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Context } from "../../context/context";

export default function Header({ checkedLogin }) {
    const {handleSignOut} = useContext(Context)
    return (
        <Container>
            {checkedLogin && <IconBTN onPress={handleSignOut}>
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
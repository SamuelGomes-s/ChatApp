import styled from "styled-components/native";

const Background = styled.View`
    flex: 1;
    background-color: #fff;
`;

const ModalBTN = styled.TouchableOpacity`
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: #216dfb;
    justify-content: center;
    align-items: center;
    bottom: 40px;
    right: 30px;
    z-index: 99;
`;

const ListGroups = styled.FlatList``;

export {
    Background,
    ModalBTN,
    ListGroups
}

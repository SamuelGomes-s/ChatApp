import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex-direction:   row;
    background-color: #216dfb;
    width: 100%;
    height: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
`;

const IconBTN = styled.TouchableOpacity`
    justify-content:center;
    align-items: center;
`;

const AreaBTN = styled.View`
    flex: 1;
    justify-content: center;
    align-items: flex-end;
`;

export {
    Container,
    Title,
    IconBTN,
    AreaBTN
}
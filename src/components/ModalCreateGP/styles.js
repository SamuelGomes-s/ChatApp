import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: rgba(34,34,34,0.45);
`;

const TransparenteView = styled.View`
    flex: 1;
`;

const ContentActions = styled.View`
    flex:  1;
    border-top-width: 1px;
    border-top-color: #000;
    background-color: #fff;
    align-items: center;
;`

const Text = styled.Text`
    font-size: 22px;
    color: #000;
    font-weight: bold;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const Input = styled.TextInput`
    width: 100%;
    background-color: #d9d8d8;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    color: #000;
    font-size: 16px;
`;

const AreaInput = styled.View`
    justify-content:   center;
    align-items: center;
    margin-bottom: 15px;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 45px;
`;

const CreateButtonGP = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    justify-content:   center;
    align-items: center;
    border-radius: 8px;
    background-color: #2e54d4;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #fff;
`;

export {
    Container,
    TransparenteView,
    ContentActions,
    Text,
    Input,
    CreateButtonGP,
    ButtonText,
    AreaInput
} 
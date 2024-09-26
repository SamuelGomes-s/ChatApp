import styled from "styled-components/native";


const Background = styled.SafeAreaView`
    flex:1;
    background-color: #ffffff;
    align-items: center;
    padding-top: 55px;;
`;

const TitleApp = styled.Text`
    font-size: 30px;
    font-weight:bold;
    color: #000;
    margin-bottom: 5px;
`;

const Slogan = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #121212;
    margin-bottom: 30px;
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

const Input = styled.TextInput`
    width: 100%;
    background-color: #d9d8d8;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    color: #000;
    font-size: 16px;

`;

const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    justify-content:   center;
    align-items: center;
    border-radius: 8px;
    background-color: #2e54d4;

    
`;

const SubmitText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #fff;
`;



export {
    Background,
    Slogan,
    TitleApp,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText
}
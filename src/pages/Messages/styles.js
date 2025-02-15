import styled from "styled-components/native";

const Container = styled.View`
    margin: 3%;     
    flex: 1;
    justify-content: flex-end;
`;

const ContentMessages = styled.View` 
`;

const ListMessages = styled.FlatList`
    width: 100%;
`;

const ContentInput = styled.View`
    width: 100%;
    padding: 8px;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
`;

const AreaInput = styled.View`
    background-color: #fff;
    justify-content: center;
    flex: 1;
    width: 100%;
    border-radius: 30px;
`;

const Input = styled.TextInput`
    padding-left: 20px;
    padding-right:  20px;
    font-size: 17px;
    color: #000;
    max-height: 130px;
`;

const AreaButton = styled.View`
    margin-left: 3%;
`;

const SubmitButton = styled.TouchableOpacity`
    border-radius: 25px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #3dbebb;  
`;

export {
    Container,
    AreaInput,
    Input,
    SubmitButton,
    ContentInput,
    ContentMessages,
    ListMessages,
    AreaButton
}
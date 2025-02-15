import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
    padding: 3%;
    flex-direction: row;
    align-items: center;
    margin: 15px 0px 0px 0px;
    width: 100%;
    height: 80px;
    background-color: #f0f0f0;    
`;

const Content = styled.View`
    margin-left: 4px;
    flex-shrink: 1;
`;

const ContentHeader = styled.View`
    flex-direction:  row;
`;

const Title = styled.Text`
    font-size: 22px;
    color: #000;
    font-weight: bold;
`;

const LastMessage = styled.Text`
    font-size: 18px;
`;

export {
    Container,
    Title,
    LastMessage,
    Content,
    ContentHeader
}
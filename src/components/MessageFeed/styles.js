import styled from "styled-components/native";

const Container = styled.View`
    width: 100%;
    padding: ${props => props.userMSG ? ' 0px 0px 15px 50px ' : ' 0px 50px 15px 0px'};
    align-self: ${props => props.userMSG ? 'flex-end' : 'flex-start'};  
`;

const Content = styled.View`
    border-radius: 8px;
    min-height: 55px;
    background-color: ${props => props.BG ? '#dcf8c5' : '#fff'};  
    justify-content: center;
    padding: 10px;
`;

const MessageText = styled.Text` 
    font-size: 15px;
    color: #000;
    
`;

const NameUser = styled.Text`
    font-size: 17px;
    color: #e11;
    font-weight: bold;
`;

const AreaName = styled.View`
    margin-bottom: 5px;
`;

export {
    Container,
    MessageText,
    Content,
    NameUser,
    AreaName
};

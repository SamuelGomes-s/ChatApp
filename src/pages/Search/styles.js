import styled from "styled-components/native";

const Container = styled.View`
    flex: 1%;
    background-color: #fff;
    margin-bottom: 30px;
`;

const SearchArea = styled.View` 
    flex-direction: row;
    margin: 30px 0px  15px  15px ; 
`;

const SearchButton = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    background-color: #216dfb;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-left: 10px;
    margin-right: 10px;
`;

const SearchInput = styled.TextInput`
    flex:1 ;
    height: 45px;
    background-color: #d9d8d8;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    color: #000;
    font-size: 16px;
`;

const SearchList = styled.FlatList`
`;

export {
    Container,
    SearchButton,
    SearchInput,
    SearchArea,
    SearchList
}

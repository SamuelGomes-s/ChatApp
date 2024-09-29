import React, { useContext, useState } from 'react';
import { Keyboard, Text, TouchableOpacity } from 'react-native';
import { AreaInput, Background, Input, Slogan, SubmitButton, SubmitText, TitleApp } from './styles';
import { Context } from '../../context/context';



export default function SignIn() {

  const { handleUserLogin, type, setType } = useContext(Context)


  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    Keyboard.dismiss()
    handleUserLogin(type, email, name, password)
  }





  return (
    <Background>
      <TitleApp> HeyGrupos </TitleApp>
      <Slogan> Ajude, colabore, faça networking! </Slogan>

      {type && <AreaInput>
        <Input
          placeholder='Nome'
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </AreaInput>}
      <AreaInput>

        <Input
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder='Senha'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </AreaInput>
      <SubmitButton onPress={handleLogin}>
        <SubmitText>   {type ? ' Cadastrar ' : 'Acessar'} </SubmitText>
      </SubmitButton>

      <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }} onPress={() => setType(!type)}>
        <Text style={{ color: '#000' }}>
          {type ? ' Já possuo uma conta' : 'Criar uma nova conta'}
        </Text>
      </TouchableOpacity>

    </Background>)
}
